#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Step 2.6c
"""
import pymongo as pm


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
    # Torino 45 - 7.576 , 45 - 7.78 , 45.142 - 7.576 , 45.142 - 7.78
    # 0.004495 verso nord e 0.006358 verso est
    dx = 0.006358
    dy = 0.004495
    x = 7.576
    y = 45
    density = [[0] * 32 for i in range(32)]
    collection = get_collection()
    START_HOUR = 18
    END_HOUR = 24

    for i in range(32):
        for j in range(32):
            density[i][j] = len(list(collection.aggregate(
                [
                    {'$match': {'city': CITY}},
                    {'$project': {'_id': 0,
                                  'origin': {'$arrayElemAt': ["$origin_destination.coordinates", 0]},
                                  'destination': {'$arrayElemAt': ["$origin_destination.coordinates", 1]},
                                  'hour_of_day': {'$hour': '$init_date'},
                                  'moved': {'$ne': [
                                      {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                                      {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                                  }},
                    {'$match': {'moved': True, 'hour_of_day': {'$gte': START_HOUR, '$lt': END_HOUR},
                                "origin": {"$geoWithin": {
                                    "$geometry": {
                                        "type": "Polygon",
                                        "coordinates": [[[x + j * dx, y + i * dy],
                                                         [x + (j + 1) * dx, y + i * dy],
                                                         [x + (j + 1) * dx, y + (i + 1) * dy],
                                                         [x + j * dx, y + (i + 1) * dy],
                                                         [x + j * dx, y + i * dy]]]
                                    }}},
                                "destination": {"$geoWithin": {
                                    "$geometry": {
                                        "type": "Polygon",
                                        "coordinates": [[[x + j * dx, y + i * dy],
                                                         [x + (j + 1) * dx, y + i * dy],
                                                         [x + (j + 1) * dx, y + (i + 1) * dy],
                                                         [x + j * dx, y + (i + 1) * dy],
                                                         [x + j * dx, y + i * dy]]]
                                    }}}
                                }},
                    {"$group": {'_id': {'origin': '$origin', 'destination': '$destination'}, 'count': {'$sum': 1}}}
                ])))

    with open('OD.csv', 'w') as file:
        file.write('geometry,flow\n')
        for i in range(32):
            for j in range(32):
                file.write('''\"<LineString><coordinates>
{},{},0 {},{},0 
</coordinates></LineString>\",{}\n'''.format(x + j * dx, y + i * dy, x + (j + 1) * dx, y + i * dy, density[i][j]))


if __name__ == '__main__':
    main()
