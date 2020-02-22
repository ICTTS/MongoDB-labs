#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.6c.

Compute then the O-D matrix, i.e., the number of rentals starting in area i
and ending in area j. Try to visualize the results in a meaningful way.
"""
import pymongo as pm
import pprint
import json
import numpy as np

COLLECTION = 'PermanentBookings'
CITY = "Torino"


def get_collection():
    """Connect to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']
    db.authenticate('ictts', 'Ictts16!')
    collection = db[COLLECTION]
    return collection


def main():
    """Define main function."""
    # Torino 45 - 7.576 , 45 - 7.78 , 45.142 - 7.576 , 45.142 - 7.78
    # 0.004495 verso nord e 0.006358 verso est
    dx = 0.006358 * 16
    dy = 0.004495 * 16
    x = 7.576
    y = 45
    n = 2
    density = [[0] * n for i in range(n)]
    collection = get_collection()

    fascie_orarie = [0, 6, 12, 18]

    for hour in fascie_orarie:
        for i in range(n):
            for j in range(n):
                coursor = collection.aggregate(
                    [
                        {'$match': {'city': CITY}},
                        {'$project':
                             {'_id': 0,
                              'origin': {'$arrayElemAt':
                                             ["$origin_destination.coordinates",
                                              0]},
                              'destination':
                                  {'$arrayElemAt':
                                       ["$origin_destination.coordinates",
                                        1]},
                              'hour_of_day': {'$hour': '$init_date'}
                              }},
                        {'$match': {'hour_of_day': {'$gte': hour,
                                                    '$lt': hour + 6}}},
                        {'$project': {'_id': 0,
                                      'origin_x': {'$arrayElemAt':
                                                       ["$origin", 0]},
                                      'origin_y': {'$arrayElemAt':
                                                       ["$origin", 1]},
                                      'destination_x': {'$arrayElemAt':
                                                            ["$destination",
                                                             0]},
                                      'destination_y': {'$arrayElemAt':
                                                            ["$destination",
                                                             1]}
                                      }},
                        {'$match': {'origin_x': {'$gte': x + j * dx,
                                                 '$lt': x + (j + 1) * dx},
                                    'origin_y': {'$gte': y + i * dy,
                                                 '$lt': y + (i + 1) * dy},
                                    'destination_x': {'$lt': x + j * dx,
                                                      '$gte': x + (j + 1) * dx},
                                    'destination_y': {'$lt': y + i * dy,
                                                      '$gte': y + (i + 1) * dy}}
                         },
                        {"$group": {'_id': 0, 'count': {'$sum': 1}}}
                    ])
                density[i][j] = len(list(coursor))
                print(density)


if __name__ == '__main__':
    main()
