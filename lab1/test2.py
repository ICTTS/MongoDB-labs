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
        data = []
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
                    }
                 },
                {'$match': {'hour_of_day': {'$gte': hour, '$lt': hour + 6}}}
            ])
        for entry in list(coursor):
            d = {
                "type": "Feature",
                "properties": {"load": 1},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        entry['origin'],
                        entry['destination']
                    ]
                }
            }
            data.append(d)
        filename = "data_" + str(hour) + ".json"
        with open(filename, 'w') as outfile:
            json.dump(data, outfile, indent=4)
    print("finished")

    
if __name__ == '__main__':
    main()