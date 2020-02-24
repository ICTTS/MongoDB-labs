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
    array = ['#800000', '#8d0000', '#990000', '#a60000', '#b30000', '#c00000', '#cc0000', '#d90000', '#e60000',
             '#f20000', '#ff0000', '#ff1000', '#ff2100', '#ff3200', '#ff4200', '#ff5200', '#ff6300', '#ff7400',
             '#ff8400', '#ff9400', '#ffa500', '#ffae00', '#ffb700', '#ffc000', '#ffc900', '#ffd200', '#ffdb00',
             '#ffe400', '#ffed00', '#fff600', '#ffff00', '#e6ff00', '#ccff00', '#b2ff00', '#99ff00', '#80ff00',
             '#66ff00', '#4dff00', '#33ff00', '#1aff00', '#00ff00', '#00f200', '#00e600', '#00d900', '#00cc00',
             '#00c000', '#00b300', '#00a600', '#009900', '#008d00', '#008d19', '#009933', '#00a64d', '#00b366',
             '#00c080', '#00cc99', '#00d9b3', '#00e6cc', '#00f2e5', '#00ffff', '#00e6ff', '#00ccff', '#00b3ff',
             '#0099ff', '#0080ff', '#0066ff', '#004cff', '#0033ff', '#001aff', '#0000ff', '#0c08fb', '#1710f7',
             '#2317f3', '#2e1fef', '#3a27eb', '#452fe6', '#5137e2', '#5d3ede', '#6846da', '#744ed6', '#8053d8',
             '#8c58db', '#985edd', '#a563e0', '#b168e2', '#bd6de4', '#c972e7', '#d678e9', '#e27dec', '#ee82ee',
             '#e375e3', '#d868d8', '#cd5bcd', '#c24ec2', '#b741b7', '#ac34ac', '#a127a1', '#961a96', '#8b0d8b',
             '#800080']
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
            c = random.randint(1, 99)
            '''d = {
                "type": "Feature",
                "properties": {"load": load, "maxload": maxload, "color": array[c]},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        pair[0],
                        pair[0]
                    ]
                }
            }
            d2 = {
                "type": "Feature",
                "properties": {"load": load, "maxload": maxload, "color": array[c]},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        pair[1],
                        pair[1]
                    ]
                }
            }
            if d not in data and d2 not in data:
                data.append(d)
                data.append(d2)'''
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
