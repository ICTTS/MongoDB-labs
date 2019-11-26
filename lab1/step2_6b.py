#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Step 2.6a
"""
import pymongo as pm
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
    print('connected')
    return collection


def main():
    array = []

    array.append()




if __name__ == '__main__':
    main()
