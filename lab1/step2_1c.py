#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  9 10:53:06 2019
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


def days_aggregate():
    """Aggregation per days of the week."""
    collection = get_collection()
    start = "01/10/2017"
    end = "01/11/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())
    start_time_seattle = start_time -10*60*60
    end_time_seattle = end_time -9*60*60

    daysofweek = [1,2,3,4,5,6,7]

    for day in daysofweek:

       duration_list = []
       num_of_documents = 0
       seconds = 0

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
                   '_id':0,
                   'duration': {'$subtract': ['$final_time','$init_time']},
                   'dayOfWeek': {'$dayOfWeek': '$init_date'}
                   }
               },
               {'$match':{
                   'dayOfWeek': day
                   }
               },
               {'$project':{
                   'duration':1
                   }
               },
           {'$sort':{
               'duration': 1
           }
       }]))

       num_of_documents = len(my_collection) # Number of documents

       # Points for grouping in CDF
       starting_point = 0
       how_many = 0

       # Calculate CDF
       while True:
           seconds += 60

           for i in range (starting_point, num_of_documents):

               if my_collection[i]['duration'] < seconds:
                   how_many += 1

               else:
                   starting_point = i
                   break

           duration_list.append(how_many)

           if duration_list[-1] == num_of_documents:
               break

       results = [x/num_of_documents for x in duration_list]

       plt.semilogx(range(len(duration_list)),results)

    plt.xlabel('Minutes')
    plt.ylabel('CDF')
    plt.ylim([0, 1])
    plt.legend(['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'], loc=4)
    plt.grid(which='both')
    plt.show()

def weeks_aggregate():
    """Aggregation per weeks."""
    collection = get_collection()
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    start_time_seattle = start_time -10*60*60
    week_duration = 7*24*60*60  # In seconds.
    end_time = start_time + week_duration
    end_time_seattle = start_time_seattle + week_duration

    weeks = [1, 2, 3, 4]

    for week in weeks:

        duration_list = []
        num_of_documents = 0
        seconds = 0

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
                    '_id':0,
                    'duration': {'$subtract': ['$final_time','$init_time']}
                    }
                },
                {'$project':{
                    'duration':1
                    }
                },
            {'$sort':{
                'duration': 1
            }
        }]))

        start_time = end_time
        end_time += week_duration

        num_of_documents = len(my_collection) # Number of documents

        # Points for grouping in CDF
        starting_point = 0
        how_many = 0

        # Calculate CDF
        while True:
            seconds += 60

            for i in range (starting_point, num_of_documents):

                if my_collection[i]['duration'] < seconds:
                    how_many += 1

                else:
                    starting_point = i
                    break

            duration_list.append(how_many)

            if duration_list[-1] == num_of_documents:
                break

        results = [x/num_of_documents for x in duration_list]

        plt.semilogx(range(len(duration_list)),results)

    plt.xlabel('Minutes')
    plt.ylabel('CDF')
    plt.ylim([0, 1])
    plt.legend(['week 1', 'week 2', 'week 3', 'week 4'], loc=4)
    plt.grid(which='both')
    plt.show()


def main():
    days_aggregate()
    weeks_aggregate()


if __name__ == '__main__':
    main()
