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
CITY_LIST = ["Torino", "Wien", "Seattle"]


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
    """Aggregation per hours of the day."""
    collection = get_collection()
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start,
                             "%d/%m/%Y").timetuple())
    day_duration = 24*60*60
    start_time_seattle = start_time -10*60*60
    end_time_seattle = start_time_seattle + day_duration

    days = list(range(31))
    fig, ax = plt.subplots(constrained_layout=False, figsize=(15, 8))

    for city in CITY_LIST:
        number_of_rentals = []
        time1 = start_time
        time2 = start_time + day_duration
        for day in days:

           if (city == "Seattle"):
               time1 = start_time_seattle
               time2 = end_time_seattle

           my_collection = list(collection.aggregate([
                   {'$match':{
                       '$and':[
                       {'city': city},
                       {'init_time': {'$gte': time1, '$lt': time2}}]}
                   },
                   {'$project':{
                       '_id': 0,
                       'hour_of_day': {'$hour': '$init_date'}
                       }
                   },
                   {'$group':{
                       '_id': "$hour_of_day",
                       'total': {"$sum": 1}
                   }},
                   {'$sort':{
                           '_id': 1
                           }}

           ]))

           time1 = time2
           time2 = time2 + day_duration

           for el in my_collection:
             number_of_rentals.append(el['total'])

        plt.plot(number_of_rentals)

    plt.xlabel('Hours per day')
    plt.ylabel('No. of bookings')
    plt.xticks(ticks=[0, 168, 336, 504, 672],
               labels=['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 29'],
               rotation='horizontal')
    plt.legend(CITY_LIST, loc=2)
    plt.grid(which='both')
    plt.title("Bookings")


def main():
    hours_aggregate()
    plt.show()


if __name__ == '__main__':
    main()
