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
        return
    
    elif request.method == 'POST':
        ##do Post request stuff here
        return

    else:
        ##do put request stuff here
        return

