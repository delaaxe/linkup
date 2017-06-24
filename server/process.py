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


def patch_to_events(patch, date, previous_df, df):
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


def tables_to_events(tables):
    for (_, previous_df), (date, df) in zip(tables[:-1], tables[1:]):
        patch = create_patch(previous_df, df)
        yield from patch_to_events(patch, date, previous_df, df)


def event_to_tweet(event):
    return {
        'actor': event['actor'],
        'date': event['date'],
        'source': format_tweet(event),
    }


def format_tweet(event):
    def format_actor(actor):
        return f'<a href="#">@{actor.first_name} {actor.last_name}</a>'

    if event['type'] == 'arrival':
        employee = event['df']['to'].loc[event['actor']]
        name = format_actor(employee)
        return f'{name} joined SG as <a href="#">#{employee.job_title}</a>'
    if event['type'] == 'departure':
        employee = event['df']['from'].loc[event['actor']]
        name = format_actor(employee)
        return f'{name} left'
    if event['type'] == 'change':
        employee = event['df']['to'].loc[event['actor']]
        name = format_actor(employee)
        data = event['data']
        if 'city' in data:
            field = data['city']
            return f'{name} moved from <a href="#">#{field["to"]}</a> to <a href="#">#{field["from"]}</a>'
        if 'job_title' in data:
            field = data['job_title']
            return f'{name} is now <a href="#">#{field["to"]}</a> (previously <a href="#">#{field["from"]})</a>'
        if 'manager_id' in data:
            field = data['manager_id']
            manager = event['df']['to'].loc[field['to']]
            manager_name = format_actor(manager)
            return f'{name} now reports to {manager_name}'
    return 'Unknown'


def main():
    cwd = pathlib.Path(__file__).parent
    xl = pd.ExcelFile(cwd / 'employees.xlsx')
    tables = [(sheet_name, xl.parse(sheet_name, index_col=0)) for sheet_name in xl.sheet_names]
    for _, table in tables:
        table.set_index(table.index.map(lambda x: '' if pd.isnull(x) else str(int(x))), inplace=True)
        table.index.name = 'id'
        table.manager_id = table.manager_id.map(lambda x: '' if pd.isnull(x) else str(int(x)))
    events = tables_to_events(tables)
    tweets = list(map(event_to_tweet, events))
    tweets[:2] = tweets[1], tweets[0]

    with (cwd.parent / 'client' / 'src' / 'app' / 'app.fixture.ts').open('w') as fp:
        fp.write(f'export let tweets = {json.dumps(tweets, indent=2)};')

if __name__ == '__main__':
    main()
