#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.4.

Filtering data as above, consider the system utilization over time again. Are
you able to filter outliers?
"""
import pymongo as pm
import matplotlib.pyplot as plt
import time
import datetime
import pandas as pd

COLLECTION = ['PermanentBookings', 'PermanentParkings']
CITY_LIST = ["Torino", "Wien", "Seattle"]


def get_collection(coll_name):
    """Connect to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']
    db.authenticate('ictts', 'Ictts16!')
    collection = db[coll_name]
    return collection


def days_aggregate(collection_name, city):
    """Aggregate per days of the week."""
    collection = get_collection(collection_name)
    start = "01/10/2017"
    end = "01/11/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/"
                                                        "%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end,
                                                      "%d/%m/%Y").timetuple())
    start_time_seattle = start_time - 10*60*60
    end_time_seattle = end_time - 9*60*60

    if (city == "Seattle"):
        start_time = start_time_seattle
        end_time = end_time_seattle

    my_collection = list(collection.aggregate([
            {"$match": {
                "$and": [
                    {"city": city},
                    {"init_time": {"$gte": start_time,
                                   "$lt": end_time}}]
            }
            },
            {"$project": {
                "_id": 0,
                "duration": {"$subtract": ["$final_time",
                                           "$init_time"]},
                "dayOfYear": {"$dayOfYear": "$init_date"},
                "hour": {"$floor": {"$divide": ["$init_time", 3600]}},
                "dayOfWeek": {"$dayOfWeek": "$init_date"}
            }
            },
            {"$group": {
                "_id": {"hour": "$hour"},
                "count": {"$sum": 1}
            }
            },
            {"$sort": {
                "_id": 1
            }
            },
            {"$project": {
                "_id": 0,
                "hour": "$_id.hour",
                "count": "$count",
            }
            },
            ]))

    df = pd.DataFrame(my_collection)
    # print(df)
    # plt.plot(df['hour'], df['count'])
    plt.plot(df['count'])
    plt.xlabel('Hours per day')
    plt.ylabel('No. of bookings')
    plt.xticks(ticks=[0, 168, 336, 504, 672],
               labels=['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 29'],
               rotation='horizontal')
    plt.grid(which='both')
    plt.title(collection_name)
    save_file(df, city + ".csv")


def hours_aggregate():
    """Aggregate per hours of the day."""
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
        low_limit = 2*60  # Two minutes
        high_limit = 3*60*60  # Three hours
        for city in CITY_LIST:
            number_of_rentals = []
            time1 = start_time
            time2 = start_time + day_duration

            if (city == "Seattle"):
                time1 = start_time_seattle
                time2 = end_time_seattle

            for day in days:
                if coll == 'PermanentBookings':
                    my_collection = list(collection.aggregate([
                        {'$match': {
                            '$and': [
                                {'city': city},
                                {'init_time': {'$gte': time1, '$lt': time2}}]}
                         },
                        {'$project': {
                         '_id': 0,
                            'hour_of_day': {'$hour': '$init_date'},
                            'duration': {'$subtract': ['$final_time',
                                                       '$init_time']},
                            'moved': {'$ne': [
                                    {'$arrayElemAt':
                                        ['$origin_destination.coordinates',
                                         0]},
                                    {'$arrayElemAt':
                                        ['$origin_destination.coordinates',
                                         1]}]
                                    }
                         }
                         },
                        {'$match':
                            {'moved': True,
                             'duration': {'$gt': low_limit, '$lt': high_limit}
                             }
                         },
                        {'$group': {
                            '_id': "$hour_of_day",
                            'total': {"$sum": 1}
                                }
                         },
                        {'$sort': {
                            '_id': 1
                        }}
                        ]))

                elif coll == 'PermanentParkings':
                    my_collection = list(collection.aggregate([
                        {'$match': {
                            '$and': [
                                {'city': city},
                                {'init_time': {'$gte': time1,
                                               '$lt': time2}}]}
                         },
                        {'$project': {
                         '_id': 0,
                            'hour_of_day': {'$hour': '$init_date'},
                            'duration': {'$subtract': ['$final_time',
                                                       '$init_time']}
                         }
                         },
                        {'$match':
                            {'duration': {'$gt': low_limit}
                             }
                         },
                        {'$group': {
                            '_id': "$hour_of_day",
                            'total': {"$sum": 1}
                                }
                         },
                        {'$sort': {
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
        plt.xlim([0, 24*31])
        plt.grid(which='both')
        plt.title(coll)
        plt.savefig('step2_4' + coll + '.eps', format='eps')


def save_file(coll, filename):
    """Save collection to csv."""
    print("Saving to %s" % filename)
    coll.to_csv(filename)


def main():
    """Call aggregation."""
    fig, ax = plt.subplots(constrained_layout=False, figsize=(15, 8))
    for city in CITY_LIST:
        days_aggregate("PermanentBookings", city)
    plt.legend(CITY_LIST, loc=2)
    plt.xlim([0, 24*31])

    # hours_aggregate()
    plt.show()
    print("---END---")


if __name__ == '__main__':
    main()
