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
    # Torino 45 - 7.576 , 45 - 7.78 , 45.142 - 7.576 , 45.142 - 7.78
    # 0.004495 verso nord e 0.006358 verso est
    dx = 0.006358
    dy = 0.004495
    x = 7.576
    y = 45
    density = []
    with open('grid.csv', 'w') as file:
        file.write('geometry,density\n')
        for i in range(32):
            for j in range(32):
                file.write('''\"<Polygon><outerBoundaryIs><LinearRing><coordinates>
{},{},0 {},{},0 {},{},0 {},{},0 {},{},0 
</coordinates></LinearRing></outerBoundaryIs></Polygon>\",{}\n'''.format(x + j * dx, y + i * dy,
                                                                         x + (j + 1) * dx, y + i * dy,
                                                                         x + (j + 1) * dx, y + (i + 1) * dy,
                                                                         x + j * dx, y + (i + 1) * dy,
                                                                         x + j * dx, y + i * dy, 1))


if __name__ == '__main__':
    main()
