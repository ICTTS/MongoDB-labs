#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  9 10:53:06 2019
"""

import pymongo as pm #import MongoClient only
import matplotlib.pyplot as plt
import time
import datetime

client = pm.MongoClient('bigdatadb.polito.it',
ssl=True,
authSource = 'carsharing',
tlsAllowInvalidCertificates=True)
db = client['carsharing'] #Choose the DB to use
db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication
PermanentBookings = db['PermanentBookings'] # Collection for Car2go to use

start = "01/10/2017"
start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
end = "01/11/2017"
end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())

city = "Torino"
duration = []
documents = 0
count = 0

my_collection = list(PermanentBookings.aggregate([
    {'$match':{
        '$and':[
        {'city': city},
        {'init_time': {'$gt': start_time, '$lt': end_time}}]
        }
    },
    {'$project':{
        '_id':0,
        'init_time': 1,
        'duration': {'$subtract': ['$final_time','$init_time']},
        'origin_destination.coordinates': 1
        }
    },
    {'$sort':{
        'duration': 1
    }
    }]))

documents = len(my_collection)

starting_point = 0
how_many = 0
cnt = 0
while True:
    count += 60
    for i in range (starting_point,documents):
        if my_collection[i]['duration'] < count:
            how_many += 1
        else:
            starting_point = i
            break
    duration.append(how_many)
    #print(cnt)
    cnt+=1
    
    if duration[-1] == documents:
        break

results = [x/documents for x in duration]

#%% Plots  
plt.semilogx(range(len(duration)),results)
#plt.plot(results)
plt.xlabel('Minutes')
plt.ylabel('CDF')
plt.ylim([0, 1])
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