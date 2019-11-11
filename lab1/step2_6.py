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
            {'$match': {'city': CITY}},
            {'$project': {'_id': 0,
                          'loc': 1,
                          'hour_of_day': {'$hour': '$init_date'}
                          }}
        ]))
    data = []
    for i in my_collection:
        data.append([i['loc']['coordinates'][0], i['loc']['coordinates'][1], i['hour_of_day']])

    
    df = pd.DataFrame(data, columns=['Latitude', 'Longitude', 'Hour'])

    # TODO partizione mattino pomeriggio sera notte
    intervallo = 'mattino'
    filename = 'heatmap'+intervallo+'.csv'
    df.to_csv(filename, mode='w')

if __name__ == '__main__':
    main()
