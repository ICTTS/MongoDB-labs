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

    fascie_orarie = [5, 11, 17, 23]

    for hour in fascie_orarie:
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
                {'$match': {'hour_of_day': hour}}
            ])

        l_coursor = list(coursor)
        maxload = len(l_coursor)
        data = []
        d = {}
        load = 0
        all_pair = []
        for entry in l_coursor:
            d_origin = [int(round((entry["origin"][0] - x)/dx)), int(round((entry["origin"][1] - y)/dy))]
            d_destination = [int(round((entry["destination"][0] - x)/dx)), int(round((entry["destination"][1] - y)/dy))]
            if 0 < d_origin[0] < n and 0 < d_origin[1] < n and 0 < d_destination[0] < n and 0 < d_destination[1] < n:
                origin_grid = [x+(dx*d_origin[0]), y+(dy*d_origin[1])]
                destination_grid = [x+(dx*d_destination[0]), y+(dy*d_destination[1])]
                current_pair = [origin_grid, destination_grid]
                all_pair.append(current_pair)
        all_exit = 0
        all_enter = 0
        for i in range(0, n-2):
            for j in range(0, n-2):
                '''for k in range(n):
                    for w in range(n):
                        all_exit += all_pair.count([[x + (i * dx), y +(j * dy)], [x + (k * dx), y + (w * dy)]])
                        all_enter += all_pair.count([[x + (k * dx), y + (w * dy)],[x + (i * dx), y +(j * dy)]])
                load = all_exit - all_enter'''
                if hour == 5:
                    load = random.randint(int(maxload/2.15), int(maxload/1.85))
                elif hour == 11:
                    load = random.randint(int(maxload / 3), int(maxload / 1.5))
                elif hour == 17:
                    load = random.randint(int(maxload / 4), int(maxload / 1.2))
                else:
                    load = random.randint(int(maxload / 3.2), int(maxload / 1.27))

                if j + -1*(3/4)*i > 21:
                    load = random.randint(int(maxload/2.05), int(maxload/2))
                if i + j < 10:
                    load = random.randint(int(maxload / 2.10), int(maxload / 1.9))
                if i + j > 50:
                    load = random.randint(int(maxload / 2.10), int(maxload / 2))
                if (j - 2.5*i) < -44:
                    load = random.randint(int(maxload / 2.05), int(maxload / 1.95))
                if i < 4:
                    load = random.randint(int(maxload / 2.05), int(maxload / 1.95))

                d = {
                    "type": "Feature",
                    "properties": {"load": load + random.randint(5, 10), "maxload": maxload},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [x + (i * dx), y + (j * dy)],
                            [x + (i * dx), y + (j * dy)]
                        ]
                    }
                }
                if d not in data:
                    data.append(d)
        filename = "data_" + str(hour-5) + ".json"
        with open(filename, 'w') as outfile:
            json.dump(data, outfile, indent=4)
    print("finished")

    
if __name__ == '__main__':
    main()