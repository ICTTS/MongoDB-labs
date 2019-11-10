import pymongo as pm
import time
import datetime
import pandas as pd

COLLECTION = 'PermanentParkings'
CITY = "Seattle"


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
    collection = get_collection()
    my_collection = list(collection.aggregate(
    [
        {'$match':{'city':CITY }},
        {'$project':{'_id':0,
                     'loc':1,
                     'hour_of_day': {'$hour': '$init_date'}
                     }}
    ]))

if __name__ == '__main__':
    main()
