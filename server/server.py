from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
def home():
    return 'home'

@app.route('/localdata', methods = ['GET','POST','PUT'])
def local_data():
    if request.method == 'GET':
        ##do Get request here
        return getLocalData('test')
    
    elif request.method == 'POST':
        ##do Post request stuff here
        return

    else:
        ##do put request stuff here
        return



def getLocalData(query):
    if query == 'test':
        return ['test','test2','test3'] # must convert objects to json first