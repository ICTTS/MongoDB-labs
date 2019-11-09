#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pymongo as pm
from pprint import pprint
import pandas as pd
import json
import time
import datetime
import matplotlib.pyplot as plt

def main():
    client = pm.MongoClient('bigdatadb.polito.it',
                         ssl=True,
                         authSource='carsharing',
                         tlsAllowInvalidCertificates=True)
    db = client['carsharing']
    db.authenticate('ictts', 'Ictts16!')

    Bookings_collection = db['PermanentBookings']


    # new_index = Bookings_collection.create_index([("final_time", 1)])

    start = "01/10/2017"
    start = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    end = "01/11/2017"
    end = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())

    start_gmt = start
    end_gmt = end

    print("Inizio:", start_gmt)
    print("Fine:", end_gmt)
    #
    # res = Bookings_collection.count_documents({"city": "Torino",
    #                                 "init_time":
    #                                 {
    #                                     '$gte': start_gmt,
    #                                     '$lte': end_gmt
    #                                 }
    #                                 })
    # print(res)

    city = "Torino"
    lista = []


    pipe_v = list(Bookings_collection.aggregate([
    {'$match':
        {'$and':
            [
            {"city": city
            },
            {"init_time":
                {'$gte': start_gmt,
                 '$lte': end_gmt
                }
            }
            ]
        }
    },
    {'$project':
        {
            "_id": 0,
            "init_time": 1,
            "city": 1,
            "duration": {
                '$subtract': ['$final_time', '$init_time']
                },
            "origin_destination.coordinates": 1
        }
    }
    ]))
    print("OK")
    time.sleep(5000)




    tot_num = None
    dur = 0
    while True:
        dur += 1
        print(dur, "calcolo...")
        pipe1 = Bookings_collection.aggregate([
        {'$match':
            {'$and':
                [
                {"city": city
                },
                {"init_time":
                    {'$gte': start_gmt,
                     '$lte': end_gmt
                    }
                }
                ]
            }
        },
        {'$project':
            {
                "_id": 0,
                "init_time": 1,
                "city": 1,
                "duration": {
                    '$subtract': ['$final_time', '$init_time']
                    },
                "origin_destination.coordinates": 1
            }
        },
        {
            '$group': {
                "_id": {"$lt": ['$duration', dur*60]},
                "count": {'$sum': 1}
                }
        }
        ])
        l = list(pipe1)

        if tot_num == None:
            tot_num = 0

            for e in l:
                tot_num = tot_num + e['count']

            print(tot_num)

        for e in l:
            if e['_id'] == True:
                lista.append(e['count'])
                break
            else:
                lista.append(0)

        if lista[-1] == tot_num:
            break

    plt.plot(dura, lista)
    plt.show()
    plt.xlabel('Duration')

    # pipe1 = Bookings_collection.aggregate([
    # {
    #     '$project':{
    #         "city": 1,
    #         "_id": 0,
    #         "duration":{
    #             '$subtract': ['$final_time', '$init_time']
    #         }
    #     }
    # },
    # {
    # '$group':{
    #     "_id": "city",
    #     "count": {
    #         '$sum': 1
    #     }
    #     }
    # }
    # ])
    # l = list(pipe1)
    # pprint(l[0])

    # df = pd.DataFrame(list(res))
    # print(df)
    print("--- Fine ---")


if __name__ == '__main__':
    main()
