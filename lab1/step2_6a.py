#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Step 2.6a
"""
import pymongo as pm
import time
import datetime
import pandas as pd

COLLECTION = 'PermanentParkings'
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
    my_collection = list(collection.aggregate(
        [
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'loc': 1,
                          'hour_of_day': {'$hour': '$init_date'}
                          }}
        ]))
    data = []
    for i in my_collection:
        data.append([i['loc']['coordinates'][0], i['loc']['coordinates'][1], i['hour_of_day']])

    df = pd.DataFrame(data, columns=['longitude', 'latitude', 'Hour'])

    # TODO partizione mattino pomeriggio sera notte
    mattino = list(range(6, 12))
    pomeriggio = list(range(12, 18))
    sera = list(range(18, 24))
    notte = list(range(0, 6))
    df_mattino = df[df.Hour.isin(mattino)]
    df_pomeriggio = df[df.Hour.isin(pomeriggio)]
    df_sera = df[df.Hour.isin(sera)]
    df_notte = df[df.Hour.isin(notte)]
    df_mattino.to_csv('mattino.csv', mode='w')
    df_pomeriggio.to_csv('pomeriggio.csv', mode='w')
    df_sera.to_csv('sera.csv', mode='w')
    df_notte.to_csv('notte.csv', mode='w')


if __name__ == '__main__':
    main()
