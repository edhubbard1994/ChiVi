import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext


class db():
        connection = sqlite3.connect('chiviDB')
        cursor = connection.cursor()
        
        def __init__(self):
                #stores points that users create on the map
                self.cursor.execute('''CREATE TABLE map_point(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        alias TEXT NOT NULL,
                        category TEXT NOT NULL,
                        post TEXT NOT NULL,
                        lat FLOAT,
                        long FLOAT,
                        feed_id INTEGER[]
                        )''')
                #stores response comments pulled by 
                self.cursor.execute(''' CREATE TABLE feed(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        author TEXT,
                        created TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
                        body TEXT NOT NULL
                        )''')

                self.connection.commit()

        def query_points(self,params):
                pass
        
        def query_feed(self,params):
                pass





