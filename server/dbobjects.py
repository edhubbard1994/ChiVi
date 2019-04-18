import server

''' Put all classes that correspond to database tables here 
'''

class DBTransaction():
    def __init__(self, direction):
        pass

class Point(DBTransaction):
    # instantiate objects of this class to interact with the database
    def __init__(self, alias = '', category = '', post = '', lat = 0, lon = 0, feed_list = []):
        super.__init__(self,"")
        self.alias = alias
        self.category = category
        self.post = post
        self.lat = lat
        self.lon = lon
        self.feed_list = feed_list



class Feed(DBTransaction):

    def __init__(self, author = '', body = ''):
        super.__init__(self,"")
        self.author = author
        self.body = body

    
