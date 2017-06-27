import os
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


def patch_to_tweets(patch, date, df):
    for change in patch['added']:
        yield {
            'user': change,
            'type': 'arrival',
            'date': date,
            'entities': {'hashtags': [], 'user_mentions': []},
            'deltas': {field_name: {'from': None, 'to': value} for field_name, value in change.items()},
        }
    for change in patch['removed']:
        yield {
            'user': change,
            'type': 'departure',
            'date': date,
            'entities': {'hashtags': [], 'user_mentions': []},
            'deltas': {field_name: {'from': value, 'to': None} for field_name, value in change.items()}
        }
    for change in patch['changed']:
        id = change['key'][0]
        user = {'id': id, **df.loc[id].to_dict()}
        tweet = {
            'user': user,
            'type': 'change',
            'date': date,
            'entities': {'hashtags': [], 'user_mentions': []},
            'deltas': change['fields']
        }
        if 'manager_id' in change['fields']:
            manager_id = change['fields']['manager_id']['to']
            if manager_id:
                tweet['user']['manager'] = {'id': id, **df.loc[manager_id].to_dict()}
        yield tweet


def get_deltas_from_tables(tables):
    for (_, previous_df), (date, df) in zip(tables[:-1], tables[1:]):
        patch = create_patch(previous_df, df)
        for tweet in patch_to_tweets(patch, date, df):
            tweet['source'] = format_html(tweet)
            yield tweet


def format_html(tweet):
    def format_user(user):
        return f'<a href="#">@{user["first_name"]} {user["last_name"]}</a>'

    user = tweet['user']
    user_mentions = tweet['entities']['user_mentions']
    hashtags = tweet['entities']['hashtags']

    name = format_user(user)
    user_mentions += [user['id']]

    if tweet['type'] == 'arrival':
        hashtags += [user["job_title"]]
        return f'<i class="fa fa-star" aria-hidden="true"></i> {name} joined SG as <a href="#">#{user["job_title"]}</a>'
    if tweet['type'] == 'departure':
        return f'<i class="fa fa-suitcase" aria-hidden="true"></i> {name} left'
    if tweet['type'] == 'change':
        deltas = tweet['deltas']
        if 'city' in deltas:
            field = deltas['city']
            hashtags += [field["from"], field["to"]]
            return f'<i class="fa fa-plane" aria-hidden="true"></i> {name} moved from <a href="#">#{field["from"]}</a> to <a href="#">#{field["to"]}</a>'
        if 'job_title' in deltas:
            field = deltas['job_title']
            hashtags += [field["from"], field["to"]]
            return f'<i class="fa fa-handshake-o" aria-hidden="true"></i> {name} is now <a href="#">#{field["from"]}</a> (previously <a href="#">#{field["to"]}</a>)'
        if 'manager_id' in deltas:
            manager = tweet['user']['manager']
            user_mentions += [manager['id']]
            return f'<i class="fa fa-random" aria-hidden="true"></i> {name} now reports to {format_user(manager)}'
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
    tweets = list(get_deltas_from_tables(tables))

    cwd = pathlib.Path(__file__).parent
    with (cwd.parent / 'client' / 'src' / 'app' / 'app.fixture.ts').open('w') as fp:
        fp.write(f'export let tweets = {json.dumps(tweets, indent=2)};')


if __name__ == '__main__':
    main()
