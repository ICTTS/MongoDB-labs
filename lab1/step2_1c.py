#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.1.c.

Does the CDF change over time (e.g., aggregate per each week of data, or per
each day or the week)? Why?
"""
import pymongo as pm
import matplotlib.pyplot as plt
import time
import datetime

COLLECTION = ['PermanentBookings', 'PermanentParkings']
CITY = ["Torino", "Wien", "Seattle"]


def get_collection(coll_name):
    """Connect to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']  # Choose the DB to use
    db.authenticate('ictts', 'Ictts16!')
    collection = db[coll_name]
    return collection


def days_aggregate(collection_name, city):
    """Aggregate per days of the week."""
    plt.figure(constrained_layout=True)
    collection = get_collection(collection_name)
    start = "01/10/2017"
    end = "01/11/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/"
                                                        "%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end,
                                                      "%d/%m/%Y").timetuple())
    start_time_seattle = start_time - 10*60*60
    end_time_seattle = end_time - 9*60*60

    daysofweek = [1, 2, 3, 4, 5, 6, 7]

    for day in daysofweek:

        duration_list = []
        num_of_documents = 0
        seconds = 0

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
                    "dayOfWeek": {"$dayOfWeek": "$init_date"}
                }
                },
                {"$match": {
                    "dayOfWeek": day
                }
                },
                {"$project": {
                    "duration": 1
                }
                },
                {"$sort": {
                    "duration": 1
                }
                }]))

        num_of_documents = len(my_collection)  # Number of documents

        # Points for grouping in CDF
        starting_point = 0
        how_many = 0

        # Calculate CDF
        while True:
            seconds += 60

            for i in range(starting_point, num_of_documents):

                if my_collection[i]['duration'] < seconds:
                    how_many += 1

                else:
                    starting_point = i
                    break

            duration_list.append(how_many)

            if duration_list[-1] == num_of_documents:
                break

        results = [x/num_of_documents for x in duration_list]

        plt.semilogx(range(len(duration_list)), results)

    plt.xlabel('Minutes')
    plt.ylabel('CDF')
    plt.ylim([0, 1.05])
    plt.legend(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday'], loc=4)
    plt.grid(which='both')
    plt.title("%s in %s" % (collection_name, city))
    plt.savefig('step2_1c' + '_day_' + collection_name + city + '.eps',
                format='eps')


def weeks_aggregate(collection_name, city):
    """Aggregate per weeks."""
    plt.figure(constrained_layout=True)
    collection = get_collection(collection_name)
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/"
                                                        "%m/%Y").timetuple())
    start_time_seattle = start_time - 10*60*60
    week_duration = 7*24*60*60  # In seconds.
    end_time = start_time + week_duration
    end_time_seattle = start_time_seattle + week_duration
    weeks = [1, 2, 3, 4]

    if (city == "Seattle"):
        start_time = start_time_seattle
        end_time = end_time_seattle

    for week in weeks:

        duration_list = []
        num_of_documents = 0
        seconds = 0

        my_collection = list(collection.aggregate([
                {'$match': {
                    '$and': [
                        {'city': city},
                        {'init_time': {'$gte': start_time,
                                       '$lt': end_time}}]
                }
                },
                {'$project': {
                    '_id': 0,
                    'duration': {'$subtract': ['$final_time',
                                               '$init_time']}
                }
                },
                {'$project': {
                    'duration': 1
                }
                },
                {'$sort': {
                    'duration': 1
                }
                }]))

        start_time = end_time
        end_time += week_duration

        num_of_documents = len(my_collection)  # Number of documents

        # Points for grouping in CDF
        starting_point = 0
        how_many = 0

        # Calculate CDF
        while True:
            seconds += 60

            for i in range(starting_point, num_of_documents):

                if my_collection[i]['duration'] < seconds:
                    how_many += 1

                else:
                    starting_point = i
                    break

            duration_list.append(how_many)

            if duration_list[-1] == num_of_documents:
                break

        results = [x/num_of_documents for x in duration_list]

        plt.semilogx(range(len(duration_list)), results)

    plt.xlabel('Minutes')
    plt.ylabel('CDF')
    plt.ylim([0, 1.05])
    plt.legend(['week 1', 'week 2', 'week 3', 'week 4'], loc=4)
    plt.grid(which='both')
    plt.title("%s in %s" % (collection_name, city))
    plt.savefig('step2_1c' + '_week_' + collection_name + city + '.eps',
                format='eps')


def main():
    """Call aggregations per days and per weeks."""
    for city in CITY:
        for coll in COLLECTION:
            print("Analysing %s in %s - DAYS" % (coll, city))
            days_aggregate(coll, city)
            print("Analysing %s in %s - WEEKS" % (coll, city))
            weeks_aggregate(coll, city)

    plt.show()
    print("--- END ---")


if __name__ == '__main__':
    main()
