from flask import Flask
from flask import Request, request
from server import db
from server.dbobjects import Point, Feed
import sqlite3
import json

app = Flask(__name__)
db = db.db_object


@app.route('/')
def home():
    return 'home'

@app.route('/localdata', methods = ['GET','POST'])
def local_data():
    if request.method == 'GET':
        db.query_points()
        return getLocalData('test')
    
    elif request.method == 'POST':
        p = request.data
        db.add_point(Point())
        return

    else:
        ##do put request stuff here
        return "ERROR NOT A VALID METHOD"



def getLocalData(query):
    if query == 'test':
        return ['test','test2','test3'] # must convert objects to json first