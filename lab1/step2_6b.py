#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.6b.

Divide the area using a simple squared grid of 500mx500m and compute the
density of cars in each area, and plot the results using a heatmap (i.e.,
assigning a different colour to each square to represent the densities of
cars).
"""
import pymongo as pm

COLLECTION = 'PermanentParkings'
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
    dx = 0.006358  # East variation of 500 m
    dy = 0.004495  # North variation of 500 m
    x = 7.576  # East coordinates
    y = 45  # North coordinates
    density = [[0] * 32 for i in range(32)]
    collection = get_collection()
    START_HOUR = 18
    END_HOUR = 24

    for i in range(32):
        for j in range(32):
            density[i][j] = len(list(collection.aggregate([
                {'$match': {'city': CITY}},
                {'$project': {'_id': 0, 'hour_of_day': {'$hour': '$init_date'},
                              'loc': 1}},
                {'$match': {
                    'hour_of_day': {'$gte': START_HOUR, '$lt': END_HOUR},
                    "loc": {"$geoWithin": {
                        "$geometry": {
                            "type": "Polygon",
                            "coordinates": [[[x + j * dx, y + i * dy],
                                            [x + (j+1) * dx, y + i * dy],
                                            [x + (j+1) * dx, y + (i+1) * dy],
                                            [x + j * dx, y + (i+1) * dy],
                                            [x + j * dx, y + i * dy]]]
                        }}}}},
                {"$group": {'_id': "$loc", 'count': {'$sum': 1}}}
            ])))

    with open('grid.csv', 'w') as file:
        file.write('geometry,density\n')
        for i in range(32):
            for j in range(32):
                file.write('''\"<Polygon><outerBoundaryIs><LinearRing><coordinates>
{},{},0 {},{},0 {},{},0 {},{},0 {},{},0
</coordinates></LinearRing></outerBoundaryIs></Polygon>\",{}\n'''.format(
                                                            x + j*dx,
                                                            y + i*dy,
                                                            x + (j+1)*dx,
                                                            y + i * dy,
                                                            x + (j+1)*dx,
                                                            y + (i+1)*dy,
                                                            x + j*dx,
                                                            y + (i+1)*dy,
                                                            x + j*dx,
                                                            y + i*dy,
                                                            density[i][j]))


if __name__ == '__main__':
    main()
