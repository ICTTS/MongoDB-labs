#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 11 21:47:58 2019
Step 2.5
"""

import pymongo as pm #import MongoClient only
import matplotlib.pyplot as plt
import time
import datetime
import numpy as np

COLLECTION = ['PermanentBookings','PermanentParkings'] # Name of the collection
CITY_LIST = ["Torino", "Wien", "Seattle"]

low_limit = 3*60  # Two minutes
high_limit= 3*60*60  # Three hours


def get_collection(coll):
    """Connection to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing'] #Choose the DB to use
    db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication
    collection = db[coll]
    return collection


def actual_rentals(collection, city, start_time, end_time):
    my_collection = list(collection.aggregate([
                {'$match':{
                    '$and':[
                    {'city': city},
                    {'init_time': {'$gte': start_time, '$lt': end_time}}]
                    }
                },
                {'$project':{
                    '_id':0,
                    'duration': {'$subtract': ['$final_time','$init_time']},
                    'moved': {'$ne': [
                            {'$arrayElemAt': ['$origin_destination.coordinates',
                                              0]},
                            {'$arrayElemAt': ['$origin_destination.coordinates',
                                              1]}]}
                    }
                },
                {'$match':
                    {
                    'moved': True,
                    'duration': {'$gt': low_limit, '$lt': high_limit}
                    }
                },
                {'$sort':{
                    'duration': 1
                }},
                {'$group':{
                '_id':'null',
                'mean': {'$avg': '$duration'},
                'std': {'$stdDevPop': '$duration'},
                "durationArray": {"$push": "$duration"}}
                }]))

    return my_collection[0]


def actual_parkings(collection, city, start_time, end_time):
    my_collection = list(collection.aggregate([
            {'$match':{
                '$and':[
                {'city': city},
                {'init_time': {'$gte': start_time, '$lt': end_time}}]
                }
            },
            {'$project':{
                '_id':0,
                'duration': {'$subtract': ['$final_time','$init_time']}
                }
            },
            {'$match':
                {
                'duration': {'$gt': low_limit}
                }
            },
            {'$sort':{
                'duration': 1
            }},
            {'$group':{
            '_id':'null',
            'mean': {'$avg': '$duration'},
            'std': {'$stdDevPop': '$duration'},
            "durationArray": {"$push": "$duration"}}
            }]))

    return my_collection[0]


def loop():

    days_list = list(range(31))
    start = "01/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start,
                             "%d/%m/%Y").timetuple())
    day_duration = 24*60*60
    end_time = start_time + day_duration
    start_time_seattle = start_time -10*60*60
    end_time_seattle = start_time_seattle + day_duration

    for coll in COLLECTION:
        collection = get_collection(coll)

        for city in CITY_LIST:

            mean_vector = []
            median_vector = []
            std_vector = []
            percentile_vector = []

            time1 = start_time
            time2 = end_time

            if (city == "Seattle"):
                time1 = start_time_seattle
                time2 = end_time_seattle

            for day in days_list:

                if coll == 'PermanentBookings':
                    new_coll = actual_rentals(collection, city, time1, time2)
                elif coll == 'PermanentParkings':
                    new_coll = actual_parkings(collection, city, time1, time2)

                mean = new_coll['mean']
                std = new_coll['std']
                median = np.percentile(new_coll['durationArray'], 50)
                percentile = np.percentile(new_coll['durationArray'], 80)

                mean_vector.append(mean/60)
                std_vector.append(std/60)
                median_vector.append(median/60)
                percentile_vector.append(percentile/60)

                time1 = time2
                time2 = time2 + day_duration


            mean_plus = [float(i) + float(j) for i, j in zip(mean_vector,
                                                             std_vector)]
            mean_minus = [float(i) - float(j) for i, j in zip(mean_vector,
                                                              std_vector)]

            # vorrei il grafico carino in particolare: etichette sugli assi (x
            # giorni da 1 a 31),
            # linee più carine, std stampata come scritto sotto, legenda carina,
            # grafico magari un poco più
            # largo che si veda meglio (questo anche negli altri punti 2.2 e
            # 2.4) in cui stampiamo su 31 giorni
            # e vorrei che venga un grafico per città aggiungendo le altre due
            # in alto nella CITY_LIST e che si veda nel titolo magari

            fig, ax = plt.subplots(constrained_layout=False, figsize=(9, 4))
            ax.plot(mean_vector, 'r')
            ax.plot(std_vector, 'b') # sarebbe forse meglio fare mean + std e mean - std tratteggiate in rosso tipo
            ax.plot(median_vector, 'g')
            ax.plot(percentile_vector, 'c')
            ax.plot(mean_plus, 'r--')
            ax.plot(mean_minus, 'r--')
            plt.xlabel("Day")
            plt.ylabel("Minutes")
            plt.legend(["Mean", "Std", "Median", "Percentile"], loc=1)
            plt.title(coll + " in " + city)
            plt.xticks(ticks=range(0,31), labels=range(1,32))
            plt.grid(which='both')
            for xt in [0, 7, 14, 21, 28]:
                    ax.axvline(x=xt, ls='-', c='grey')
            print(coll+ " - " + city + ": Done")


def main():
    loop()
    plt.show()


if __name__ == '__main__':
    main()
