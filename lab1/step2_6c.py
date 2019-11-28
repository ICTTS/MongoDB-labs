#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Step 2.6c
"""
import pymongo as pm
import time
import datetime
import pandas as pd
import numpy as np

COLLECTION = 'PermanentBookings'
CITY = "Torino"


def get_collection():
    """Connection to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']
    db.authenticate('ictts', 'Ictts16!')
    collection = db[COLLECTION]
    return collection


def main():
    collection = get_collection()
    my_collection_notte = list(collection.aggregate(
        [
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'origin': {'$arrayElemenAt': ["$origin_destination.coordinates", 0]},
                          'destination': {'$arrayElemenAt': ["$origin_destination.coordinates", 1]},
                          'hour_of_day': {'$hour': '$init_date'},
                          'moved': {'$ne': [
                              {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                              {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                          }},
            {'$match': {'moved': True, 'hour_of_day': {'$lt': 6}}}
        ]))
    my_collection_mattino = list(collection.aggregate(
        [
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'origin': {'$arrayElemenAt': ["$origin_destination.coordinates", 0]},
                          'destination': {'$arrayElemenAt': ["$origin_destination.coordinates", 1]},
                          'hour_of_day': {'$hour': '$init_date'},
                          'moved': {'$ne': [
                              {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                              {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                          }},
            {'$match': {'moved': True, 'hour_of_day': {'$and': [{'$gte': 6}, {'$lt': 12}]}}}
        ]))
    my_collection_pomeriggio = list(collection.aggregate(
        [
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'origin': {'$arrayElemenAt': ["$origin_destination.coordinates", 0]},
                          'destination': {'$arrayElemenAt': ["$origin_destination.coordinates", 1]},
                          'hour_of_day': {'$hour': '$init_date'},
                          'moved': {'$ne': [
                              {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                              {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                          }},
            {'$match': {'moved': True, 'hour_of_day': {'$and': [{'$gte': 12}, {'$lt': 18}]}}}
        ]))
    my_collection_sera = list(collection.aggregate(
        [
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'origin': {'$arrayElemenAt': ["$origin_destination.coordinates", 0]},
                          'destination': {'$arrayElemenAt': ["$origin_destination.coordinates", 1]},
                          'hour_of_day': {'$hour': '$init_date'},
                          'moved': {'$ne': [
                              {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                              {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                          }},
            {'$match': {'moved': True, 'hour_of_day': {'$gte': 18}}}
        ]))

    data = []
    for i in my_collection_mattino:
        data.append([i['origin'][0], i['origin'][1],
                     i['destination'][0], i['destination'][1], i['hour_of_day']])

    df_m = pd.DataFrame(data, columns=['origin_longitude', 'origin_latitude',
                                       'destination_longitude', 'destination_latitude', 'Hour'])

    data = []
    for i in my_collection_pomeriggio:
        data.append([i['origin'][0], i['origin'][1],
                     i['destination'][0], i['destination'][1], i['hour_of_day']])

    df_p = pd.DataFrame(data, columns=['origin_longitude', 'origin_latitude',
                                       'destination_longitude', 'destination_latitude', 'Hour'])

    data = []
    for i in my_collection_sera:
        data.append([i['origin'][0], i['origin'][1],
                     i['destination'][0], i['destination'][1], i['hour_of_day']])

    df_s = pd.DataFrame(data, columns=['origin_longitude', 'origin_latitude',
                                       'destination_longitude', 'destination_latitude', 'Hour'])

    data = []
    for i in my_collection_notte:
        data.append([i['origin'][0], i['origin'][1],
                     i['destination'][0], i['destination'][1], i['hour_of_day']])

    df_n = pd.DataFrame(data, columns=['origin_longitude', 'origin_latitude',
                                       'destination_longitude', 'destination_latitude', 'Hour'])

    # TODO scegliere design dell'OD matrix

if __name__ == '__main__':
    main()
