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
    array = []
    array.append([['''
    <?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
    <Placemark>
    <LineString>
    <coordinates>
        7.35941,45.09177,0
        7.4,45.09177,0
        7.4,45.19177,0
        7.3594,45.19177,0
        7.35941,45.09177,0
    </coordinates>
    </LineString>
    </Placemark>
</kml>'''], [4]])

with open("Output.kml", "w") as text_file:
    print('''
    <?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
<name>Shapes</name>
<Placemark>
<name>Shape</name>
<description>Shape</description>
<LineString><coordinates>7.5567962103962145,45.04413210836781,0 
7.555766242134496,45.02278119250661,0 
7.5856353217243395,45.024722514014016,0 
7.584948676216527,45.04534498943459,0 
7.557139533150121,45.04413210836781,0 </coordinates>
</LineString>
</Placemark>
</Document>
</kml>
''', file=text_file)


if __name__ == '__main__':
    main()
