import sqlite3



class _DB():
        
        _point_queries = {'all': ('SELECT * FROM map_point',)}

        
        
        def __init__(self):
                
                self.connection = sqlite3.connect('chiviDB')
                self.cursor = self.connection.cursor()

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
                #stores response comments pulled by map_point feed_id param
                self.cursor.execute(''' CREATE TABLE feed(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        author TEXT,
                        created TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
                        body TEXT NOT NULL
                        )''')

                self.connection.commit()

        def query_points(self,param): # Queries for map_points. Param is the parameter that maps to _point_queries dict
                self.cursor.execute(_DB._point_queries[param])
                return self.cursor.fetchAll()
        
        def query_feed(self,param_list): # Queries the for comment feeds. Takes a list of id's
                feed_list = []
                for db_id in param_list:
                        self.cursor.execute('SELECT FROM FEED WHERE id EQUALS ?', db_id)
                        feed_list.append(self.cursor.fetchOne())
                return feed_list

        def add_point(self, point):
                self.cursor.execute("")


#will be the object by which all db transactions are made through
db_object = _DB()


