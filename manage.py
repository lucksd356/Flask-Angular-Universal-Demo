import os
import json
import argparse
import requests
from flask_backend.core import db
from flask_backend.models import Post

def create_sample_db_entry(api_endpoint, payload):
    url = 'http://localhost:5000/' + api_endpoint
    r = requests.post(
        url, data=json.dumps(payload),
        headers={'content-type': 'application/json',
                    'accept' : 'application/json'})
    print('db_entry', r.text)

def create_db():
    db.create_all()


def drop_db():
    db.drop_all()


def test_db():
    url = 'http://localhost:5000/dbapi/post'
    r = requests.get(url,
        headers={'content-type': 'application/json',
        'accept' : 'application/json'})
    print(r.text)
    return


def main():
    parser = argparse.ArgumentParser(
        description='Manage this Flask application.')
    parser.add_argument(
        'command', help='the name of the command you want to run')
    parser.add_argument(
        '--seedfile', help='the file with data for seeding the database')
    args = parser.parse_args()

    if args.command == 'create_db':
        create_db()

        print("DB created!")
    elif args.command == 'delete_db':
        drop_db()

        print("DB deleted!")
    elif args.command == 'seed_db' and args.seedfile:
        with open(args.seedfile, 'r') as f:
            seed_data = json.loads(f.read())

        for item_class in seed_data:
            items = seed_data[item_class]
            for item in items:
                create_sample_db_entry('dbapi/' + item_class, item)

        print("\nSample data added to database!")
    elif args.command == 'test':
        test_db()
    else:
        raise Exception('Invalid command')

if __name__ == '__main__':
    main()
