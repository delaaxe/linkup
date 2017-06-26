import io
import json
import pathlib

import csvdiff
import pandas as pd

pd.options.display.width = 240


def create_patch(previous_df, df):
    from_records = csvdiff.records.load(io.StringIO(previous_df.to_csv()))
    to_records = csvdiff.records.load(io.StringIO(df.to_csv()))
    return csvdiff.patch.create(from_records, to_records, index_columns=['id'])


def patch_to_deltas(patch, date, previous_df, df):
    dfs = {'from': previous_df, 'to': df}
    for change in patch['added']:
        yield {
            'df': dfs,
            'actor': change['id'],
            'type': 'arrival',
            'date': date,
            'data': change
        }
    for change in patch['removed']:
        yield {
            'df': dfs,
            'actor': change['id'],
            'type': 'departure',
            'date': date,
            'data': change
        }
    for change in patch['changed']:
        yield {
            'df': dfs,
            'actor': change['key'][0],
            'type': 'change',
            'date': date,
            'data': change['fields']
        }


def get_deltas_from_tables(tables):
    for (_, previous_df), (date, df) in zip(tables[:-1], tables[1:]):
        patch = create_patch(previous_df, df)
        yield from patch_to_deltas(patch, date, previous_df, df)


def delta_to_tweet(delta):
    return {
        'actor': delta['actor'],
        'date': delta['date'],
        'source': format_tweet(delta),
    }


def format_tweet(delta):
    def format_actor(actor):
        return f'<a href="#">@{actor.first_name} {actor.last_name}</a>'

    if delta['type'] == 'arrival':
        employee = delta['df']['to'].loc[delta['actor']]
        name = format_actor(employee)
        return f'<i class="fa fa-star" aria-hidden="true"></i> {name} joined SG as <a href="#">#{employee.job_title}</a>'
    if delta['type'] == 'departure':
        employee = delta['df']['from'].loc[delta['actor']]
        name = format_actor(employee)
        return f'<i class="fa fa-suitcase" aria-hidden="true"></i> {name} left'
    if delta['type'] == 'change':
        employee = delta['df']['to'].loc[delta['actor']]
        name = format_actor(employee)
        data = delta['data']
        if 'city' in data:
            field = data['city']
            return f'<i class="fa fa-plane" aria-hidden="true"></i> {name} moved from <a href="#">#{field["to"]}</a> to <a href="#">#{field["from"]}</a>'
        if 'job_title' in data:
            field = data['job_title']
            return f'<i class="fa fa-handshake-o" aria-hidden="true"></i> {name} is now <a href="#">#{field["to"]}</a> (previously <a href="#">#{field["from"]})</a>'
        if 'manager_id' in data:
            field = data['manager_id']
            manager = delta['df']['to'].loc[field['to']]
            manager_name = format_actor(manager)
            return f'<i class="fa fa-random" aria-hidden="true"></i> {name} now reports to {manager_name}'
    return 'Unknown'


def load_fixture_tables():
    cwd = pathlib.Path(__file__).parent
    xl = pd.ExcelFile(cwd / 'employees.xlsx')
    tables = [(sheet_name, xl.parse(sheet_name, index_col=0)) for sheet_name in xl.sheet_names]
    for _, table in tables:
        table.set_index(table.index.map(lambda x: '' if pd.isnull(x) else str(int(x))), inplace=True)
        table.index.name = 'id'
        table.manager_id = table.manager_id.map(lambda x: '' if pd.isnull(x) else str(int(x)))
    return tables


def load_tables():
    raise NotImplementedError()


def main():
    tables = load_fixture_tables()
    deltas = get_deltas_from_tables(tables)
    tweets = list(map(delta_to_tweet, deltas))

    cwd = pathlib.Path(__file__).parent
    with (cwd.parent / 'client' / 'src' / 'app' / 'app.fixture.ts').open('w') as fp:
        fp.write(f'export let tweets = {json.dumps(tweets, indent=2)};')


if __name__ == '__main__':
    main()
