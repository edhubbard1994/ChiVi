import server
from server.db import db_object

''' Put all classes that correspond to database tables here 
'''


class Point():
    
    # instantiate objects of this class to interact with the database
    def __init__(self, alias = None, category = None, post = None, lat = None, lon = None, feed_list = []):
        self.props = ['alias', 'category', 'post', 'lat', 'lon', 'feed_list']
        self.alias = alias
        self.category = category
        self.post = post
        self.lat = lat
        self.lon = lon 
        self.feed_list = feed_list
        

    def toDict(self):
        return vars(self)

    def toList(self):
        prop_list = []
        for item in self.props:
            prop_list.append(self.toDict()[item])
        return prop_list


class Feed():
   
    def __init__(self, author = '', body = ''):
        self.props = ['author','body']
        self.author = author
        self.body = body
        

    def toDict(self):
        return vars(self)

    def toList(self):
        prop_list = []
        for item in self.props:
            prop_list.append(self.toDict()[item])
        return prop_list

    
