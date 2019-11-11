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
    df_6_12 = df[df['Hour'] >= 6 and df['Hour'] < 12]
    df_12_18 = df[df['Hour'] >= 12 and df['Hour'] < 18]
    df_18_24 = df[df['Hour'] >= 18 and df['Hour'] < 24]
    df_0_6 = df[df['Hour'] >= 0 and df['Hour'] < 6]
    df_6_12.to_csv('mattino.csv', mode='w')
    df_12_18.to_csv('pomeriggio.csv', mode='w')
    df_18_24.to_csv('sera.csv', mode='w')
    df_0_6.to_csv('notte.csv', mode='w')

if __name__ == '__main__':
    main()
