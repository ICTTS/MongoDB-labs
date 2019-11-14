#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 13 12:54:32 2019
Step 2.7
"""

import pymongo as pm #import MongoClient only
import matplotlib.pyplot as plt
import time
import datetime
import numpy as np

COLLECTION = 'PermanentBookings'# Name of the collection
CITY = 'Torino'

#rentals
low_limit = 3*60  # Two minutes
high_limit= 3*60*60  # Three hours

#pt
high_limit_pt = 5*60*60 # cosa ha senso? ci sono numeri altissimi nell'elenco, errori?


def get_collection():
    """Connection to database."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing'] #Choose the DB to use
    db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication
    collection = db[COLLECTION]
    return collection


def pt_duration():

    start = "01/10/2017"
    end = "01/11/2017"
    start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())

    collection = get_collection()

    my_collection = list(collection.aggregate([
                    {'$match':{
                        '$and':[
                        {'city': CITY},
                        {'public_transport.duration': {'$ne': -1}},
                        {'init_time': {'$gte': start_time, '$lt': end_time}}]
                        }
                    },
                    {'$project':{
                        '_id':0,
                        'duration': {'$subtract': ['$final_time','$init_time']},
                        'pt_duration': '$public_transport.duration',
                        'moved': {'$ne': [
                                {'$arrayElemAt': ['$origin_destination.coordinates',
                                                  0]},
                                {'$arrayElemAt': ['$origin_destination.coordinates',
                                                  1]}]}}
                    },
                    {'$match':
                        {
                        'moved': True,
                        'duration': {'$gt': low_limit, '$lt': high_limit},
                        'pt_duration': {'$lt': high_limit_pt}
                    }},
                    {'$project':
                        {'pt_duration': 1}
                    },
                    {'$sort':{
                        'pt_duration': 1
                    }},
                    {'$group': {
                        '_id': 'null',
                        'pt_array': {'$push' : '$pt_duration'}}
                        },
                        {'$project': {
                            '_id' : 0,
                            'pt_array':1}
                            }]))

    return my_collection[0]['pt_array']

def histogram():
    pt_duration_array = [x/60 for x in pt_duration()]
#    print(pt_duration_array[-1]) mmmmm c'è una piccola coda di ouliers che non
#    si vede a 228 circa neanche mettendo il bin, magari farli comunque?
    bins = list(range(0,100,5))
    plt.hist(np.array(pt_duration_array),bins)
    plt.xlabel('PT duration (minutes)')
    plt.ylabel('No. rentals')
    plt.title('No. rentals given the alternative public transport trip duration')
    plt.xticks(ticks=range(0,105,5), labels=range(0,105,5))
    #come si mettono le sbarrette verticali di separazione tra le barre?


def main():
    histogram()

if __name__ == '__main__':
    main()
