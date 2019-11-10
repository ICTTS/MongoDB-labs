#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  9 10:53:06 2019
"""

import pymongo as pm #import MongoClient only
import matplotlib.pyplot as plt
import time
import datetime

COLLECTION = 'PermanentParkings' # Name of the collection

# Connection to database.
client = pm.MongoClient('bigdatadb.polito.it',
                        ssl=True,
                        authSource='carsharing',
                        tlsAllowInvalidCertificates=True)
db = client['carsharing'] #Choose the DB to use
db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication
PermanentBookings = db[COLLECTION] # Collection for Car2go to use

start = "01/10/2017"
end = "01/11/2017"
start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())
start_time_seattle = start_time -10*60*60
end_time_seattle = end_time -9*60*60

city_list = ["Wien", "Torino", "Seattle"]

for city in city_list:
    duration_list = []
    num_of_documents = 0
    count = 0
    
    if (city == "Seattle"):
        start_time = start_time_seattle
        end_time = end_time_seattle
        
    # Pipeline:
    # Select only documents with city=Torino in October 2017, calculate duration,
    # sort by duration in ascending order
    my_collection = list(PermanentBookings.aggregate([
        {'$match':{
            '$and':[
            {'city': city},
            {'init_time': {'$gt': start_time, '$lt': end_time}}]
            }
        },
        {'$project':{
            '_id':0,
            'duration': {'$subtract': ['$final_time','$init_time']}
            }
        },
        {'$sort':{
            'duration': 1
        }
        }]))
    
    num_of_documents = len(my_collection) # Number of documents
    
    # Points for grouping in CDF
    starting_point = 0
    how_many = 0
    cnt = 0
    
    # Calculate CDF
    while True:
        count += 60
    
        for i in range (starting_point, num_of_documents):
    
            if my_collection[i]['duration'] < count:
                how_many += 1
    
            else:
                starting_point = i
                break
    
        duration_list.append(how_many)
        cnt += 1
    
        if duration_list[-1] == num_of_documents:
            break
    
    results = [x/num_of_documents for x in duration_list]
    
    #%% Plots
    plt.semilogx(range(len(duration_list)),results)
    
#plt.plot(results)
plt.xlabel('Minutes')
plt.ylabel('CDF')
plt.ylim([0, 1])
plt.legend(['Turin', 'Wien', 'Seattle'])
plt.show()

#while True:
#    count += 60
#    pipe1 = PermanentBookings.aggregate([
#    {'$match':{
#        '$and':[
#        {'city': city},
#        {'init_time': {'$gt': start_time, '$lt': end_time}}]
#        }
#    },
#    {'$project':{
#        '_id':0,
#        'init_time': 1,
#        'duration': {'$subtract': ['$final_time','$init_time']},
#        'origin_destination.coordinates': 1
#        }
#    },
#    {'$group':{
#        '_id': {'$lt': ['$duration',count]},
#        'count': {'$sum': 1}
#        }
#    }
#    ])
#
#    my_list = list(pipe1)
#    for element in my_list:
#        if element['_id'] == True:
#            duration.append(element['count'])
#            break
#        else:
#            duration.append(0)
#
#    if documents == 0:
#        for element in my_list:
#            documents += element['count']
#    if duration[-1] == documents:
#        break
