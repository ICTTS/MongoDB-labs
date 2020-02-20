#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.6c.

Compute then the O-D matrix, i.e., the number of rentals starting in area i
and ending in area j. Try to visualize the results in a meaningful way.
"""
import pymongo as pm

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
    density = [[[[0] * 32 for i in range(32)] * 32 for j in range(32)] * 32 for k in range(32)]
    collection = get_collection()
    START_HOUR = 18
    END_HOUR = 24

    for i in range(32):
        for j in range(32):
            for k in range(32):
                for w in range(32):
                    density[i][j] = len(list(collection.aggregate(
                        [
                            {'$match': {'city': CITY}},
                            {'$project': {'_id': 0,
                                          'origin': {'$arrayElemAt': ["$origin_destination.coordinates", 0]},
                                          'destination': {'$arrayElemAt': ["$origin_destination.coordinates", 1]},
                                          'hour_of_day': {'$hour': '$init_date'}
                                          }},
                            {'$match': {'hour_of_day': {'$gte': START_HOUR, '$lt': END_HOUR}}},
                            {'$project': {'_id': 0,
                                          'origin_x': {'$arrayElemAt': ["$origin", 0]},
                                          'origin_y': {'$arrayElemAt': ["$origin", 0]},
                                          'destination_x': {'$arrayElemAt': ["$destination", 0]},
                                          'destination_y': {'$arrayElemAt': ["$destination", 0]}
                                          }},
                            {'$match': {'origin_x': {'$gte': x + j * dx, '$lt': x + (j + 1) * dx},
                                        'origin_y': {'$gte': y + i * dy, '$lt': y + (i + 1) * dy},
                                        'destination_x': {'$gte': x + w * dx, '$lt': x + (w + 1) * dx},
                                        'destination_y': {'$gte': y + k * dy, '$lt': y + (k + 1) * dy}}
                             },
                            {"$group": {'_id': 0, 'count': {'$sum': 1}}}
                        ])))

    with open('OD.csv', 'w') as file:
        file.write('geometry,flow\n')
        for i in range(32):
            for j in range(32):
                for k in range(32):
                    for w in range(32):
                        file.write('''\"<LineString><coordinates>
{},{},0 {},{},0
</coordinates></LineString>\",{}\n'''.format(x + j * dx, y + i * dy, x + (w + 1) * dx, y + k * dy, density[i][j][k][w]))


if __name__ == '__main__':
    main()
