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
CITY = "Torino"


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

def hours_aggregate():
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
                   'hour_of_day': {'$hour': '$init_date'}
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
    #plt.ylim([0, 1])
    #plt.legend(['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'], loc=4)
    plt.grid(which='both')
    plt.show()


def main():
    hours_aggregate()


if __name__ == '__main__':
    main()
