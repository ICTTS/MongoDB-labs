#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Created on Sat Nov  9 10:53:06 2019.

Step 2.2

Consider the system utilization over time: aggregate rentals per hour of the
day, and then plot the number of booked/parked cars (or percentage of
booked/parked cars) per hour versus time of day.
"""
import pymongo as pm
import matplotlib.pyplot as plt
import time
import datetime

COLLECTION = ['PermanentBookings', 'PermanentParkings']
CITY_LIST = ["Torino", "Wien", "Seattle"]


def get_collection(collection_name):
    """Connect to database and return the collection."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']
    db.authenticate('ictts', 'Ictts16!')
    collection = db[collection_name]
    return collection


def hours_aggregate():
    """Aggregate per hours of the day.

    start_time and end_time define the interval day period in which data has
    to be selected (match). Data are grouped by hour_of_day and then sorted.
    """
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start,
                             "%d/%m/%Y").timetuple())
    day_duration = 24*60*60
    start_time_seattle = start_time - 10*60*60
    end_time_seattle = start_time_seattle + day_duration

    days = list(range(31))

    for coll in COLLECTION:
        print("Analysing collection %s..." % (coll))
        collection = get_collection(coll)
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
                       {'$match': {
                           '$and': [
                               {'city': city},
                               {'init_time': {'$gte': time1, '$lt': time2}}]
                       }
                       },
                       {'$project': {
                           '_id': 0,
                           'hour_of_day': {'$hour': '$init_date'}
                       }
                       },
                       {'$group': {
                           '_id': "$hour_of_day",
                           'total': {"$sum": 1}
                       }},
                       {'$sort': {
                           '_id': 1
                       }
                       }
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
        plt.ylim([0, 4000])
        plt.xlim([0, 31*24])
        plt.title(coll)
        plt.savefig('step2_2' + coll + '.eps', format='eps')


def main():
    """Call aggregation per hour."""
    hours_aggregate()
    plt.show()
    print("---END---")


if __name__ == '__main__':
    main()
