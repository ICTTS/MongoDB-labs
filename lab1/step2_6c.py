#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.6c.

Compute then the O-D matrix, i.e., the number of rentals starting in area i
and ending in area j. Try to visualize the results in a meaningful way.
"""
import pymongo as pm
import pprint
import json

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
    dx = 0.006358
    dy = 0.004495
    x = 7.576
    y = 45
    n = 32
    density = [[[[0] * n for i in range(n)]* n for j in range(n)]* n for k in range(n)]
    collection = get_collection()

    fascie_orarie = [0,6,12,18]

    for hour in fascie_orarie:
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    for w in range(n):
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
                                                            '$lt': hour+6}}},
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
                                                         '$lt': x + (j+1) * dx},
                                            'origin_y': {'$gte': y + i * dy,
                                                         '$lt': y + (i+1) * dy},
                                            'destination_x': {'$gte': x + w * dx,
                                                              '$lt': x + (w+1)*dx},
                                            'destination_y': {'$gte': y + k * dy,
                                                              '$lt': y + (k+1)*dy}}
                                 },
                                {"$group": {'_id': 0, 'count': {'$sum': 1}}}
                            ])
                        density[i][j][k][w] = len(list(coursor))

        data = []
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    for w in range(n):
                        if density[i][j][k][w] > 5:
                            d = {
                                "type": "Feature",
                                "properties": {"load": density[i][j][k][w]},
                                "geometry": {
                                    "type": "LineString",
                                    "coordinates": [
                                        [x+(i*dx), y+(j*dy)],
                                        [x+(k*dx), y+(w*dy)]
                                    ]
                                }
                            }
                            data.append(d)
        filename = "data_"+str(hour)+".json"
        with open(filename, 'w') as outfile:
            json.dump(data, outfile, indent=4)

if __name__ == '__main__':
    main()
