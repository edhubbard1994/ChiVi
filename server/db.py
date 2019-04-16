import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext


class db():
        connection = sqlite3.connect('chiviDB')
        cursor = connection.cursor()
        
        def __init__(self):
                self.cursor.execute('''CREATE TABLE map_point(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        alias TEXT NOT NULL,
                        category TEXT NOT NULL,
                        post TEXT NOT NULL,
                        lat FLOAT,
                        long FLOAT,
                        feed_id INTEGER[]
                        )''')

                self.cursor.execute(''' CREATE TABLE feed(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        author TEXT,
                        created TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
                        body TEXT NOT NULL
                        )''')

                self.connection.commit()




