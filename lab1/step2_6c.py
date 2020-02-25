#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.6c.

Compute then the O-D matrix, i.e., the number of rentals starting in area i
and ending in area j. Try to visualize the results in a meaningful way.
"""
import pymongo as pm
import pprint
import json
import random
import datetime
import time
import random

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
    x = 7.564
    y = 45
    n = 32
    collection = get_collection()
    start = "05/10/2017"
    end = "06/10/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())
    fascie_orarie = [0, 6, 12, 18]

    'chromajs generated colors: '
    array = ['#00008b', '#0f0f8f', '#191b93', '#212597', '#272f9b', '#2c389f', '#3141a2', '#364aa5', '#3a53a7',
             '#3d5caa', '#4165ab', '#446eac', '#4777ad', '#4a80ac', '#4d8aaa', '#5093a6', '#549da0', '#59a795',
             '#62b084', '#71b971', '#82c065', '#91c760', '#a0ce5e', '#aed55f', '#bcdc62', '#c9e366', '#d6ea6a',
             '#e2f170', '#eff876', '#fbff7c']
    for hour in fascie_orarie:
        coursor = collection.aggregate(
            [
                {'$match': {'$and': [
                    {'city': CITY},
                    {'init_time': {'$gt': start_time, '$lt': end_time}}]}},
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
                {'$match': {'hour_of_day': {'$gte': hour,
                                            '$lt': hour + 6}}}
            ])

        l_coursor = list(coursor)
        maxload = len(l_coursor)
        data = []
        d = {}
        d2 = {}
        load = 0
        all_pair = []
        for entry in l_coursor:
            d_origin = [int(round((entry["origin"][0] - x) / dx, 6)), int(round((entry["origin"][1] - y) / dy, 6))]
            d_destination = [int(round((entry["destination"][0] - x) / dx, 6)),
                             int(round((entry["destination"][1] - y) / dy, 6))]
            if 0 < d_origin[0] < n and 0 < d_origin[1] < n and 0 < d_destination[0] < n and 0 < d_destination[1] < n:
                origin_grid = [x + (dx * d_origin[0]), y + (dy * d_origin[1])]
                destination_grid = [x + (dx * d_destination[0]), y + (dy * d_destination[1])]
                current_pair = [origin_grid, destination_grid]
                all_pair.append(current_pair)

        for pair in all_pair:
            load = all_pair.count(pair)
            c = load
            d = {
                "type": "Feature",
                "properties": {"load": load, "maxload": maxload, "color": array[c]},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        pair[0],
                        pair[1]
                    ]
                }
            }
            if d not in data:
                data.append(d)
        filename = "data_" + str(hour) + ".json"
        with open(filename, 'w') as outfile:
            json.dump(data, outfile, indent=4)
    print("finished")


if __name__ == '__main__':
    main()
