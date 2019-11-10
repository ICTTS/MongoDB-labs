#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Nov 10 16:53:07 2019
Step 2.4
"""

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  9 10:53:06 2019
Step 2.2
"""
import pymongo as pm #import MongoClient only
import matplotlib.pyplot as plt
import time
import datetime

COLLECTION = 'PermanentBookings' # Name of the collection
CITY = "Wien"


def get_collection():
    """Connection to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing'] #Choose the DB to use
    db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication
    collection = db[COLLECTION]
    return collection

def days_aggregate():
    """Aggregation per days of the week."""
    collection = get_collection()
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    day_duration = 24*60*60
    end_time = start_time + day_duration
    start_time_seattle = start_time -10*60*60
    end_time_seattle = start_time_seattle + day_duration

    days = list(range(7))
    number_of_rentals = []
    
    low_limit = 2*60  # Two minutes
    high_limit= 3*60*60  # Three hours

    for day in days:
    
       if (CITY == "Seattle"):
           start_time = start_time_seattle
           end_time = end_time_seattle

       my_collection = list(collection.aggregate([
               {'$match':{
                   '$and':[
                   {'city': CITY},
                   {'init_time': {'$gte': start_time, '$lt': end_time}}]}
               },
               {'$project':{
                   '_id': 0,
                   'hour_of_day': {'$hour': '$init_date'},
                    'duration': {'$subtract': ['$final_time','$init_time']},
                    'moved': {'$ne': [
                            {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                            {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                   }
               },
               {'$match':
                    {
                    'moved': True,
                    'duration': {'$gt': low_limit, '$lt': high_limit}
                    }
               },
               {'$group':{
                   '_id': "$hour_of_day",
                   'total': {"$sum": 1} 
               }}
       ]))
    
       start_time = end_time
       end_time = end_time + day_duration
    
       for el in my_collection:
         number_of_rentals.append(el['total'])
    
    #plt.semilogx(range(len(duration_list)),results)
    plt.plot(number_of_rentals)
    
    #plt.xlabel('Minutes')
    #plt.ylabel('CDF')
#    plt.ylim([0, 800])
    #plt.legend(['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'], loc=4)
    plt.grid(which='both')
    plt.show()


def main():
    days_aggregate()


if __name__ == '__main__':
    main()
