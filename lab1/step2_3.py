#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Nov 10 15:36:31 2019
Step 2.3
"""
import pymongo as pm
import matplotlib.pyplot as plt
import time
import datetime

COLLECTION = ['PermanentBookings', 'PermanentParkings'] # Name of the collections

# Connection to database.
client = pm.MongoClient('bigdatadb.polito.it',
                        ssl=True,
                        authSource='carsharing',
                        tlsAllowInvalidCertificates=True)
db = client['carsharing'] #Choose the DB to use
db.authenticate('ictts', 'Ictts16!')#, mechanism='MONGODB-CR') #authentication


start = "01/10/2017"
end = "01/11/2017"
start_time = time.mktime(datetime.datetime.strptime(start, "%d/%m/%Y").timetuple())
end_time = time.mktime(datetime.datetime.strptime(end, "%d/%m/%Y").timetuple())
start_time_seattle = start_time -10*60*60
end_time_seattle = end_time -9*60*60

city_list = ["Wien", "Torino", "Seattle"]

low_limit = 2*60  # Two minutes
high_limit= 3*60*60  # Three hours

for coll in COLLECTION:
    collection = db[coll] # Collection for Car2go to use
    plt.figure()
    print("Analysing collection %s..." % coll)
    for city in city_list:
        duration_list = []
        num_of_documents = 0
        minutes_counter = 0

        if (city == "Seattle"):
            start_time = start_time_seattle
            end_time = end_time_seattle

        # Pipeline:
        # Select only documents with city=Torino in October 2017, calculate duration,
        # sort by duration in ascending order
        if coll == 'PermanentBookings':
            my_collection = list(collection.aggregate([
                {'$match':{
                    '$and':[
                    {'city': city},
                    {'init_time': {'$gt': start_time, '$lt': end_time}}]
                    }
                },
                {'$project':{
                    '_id':0,
                    'duration': {'$subtract': ['$final_time','$init_time']},
                    'moved': {'$ne': [
                            {'$arrayElemAt': ['$origin_destination.coordinates', 0]},
                            {'$arrayElemAt': ['$origin_destination.coordinates', 1]}]}
                    }
                },
                {'$match':
                    {
                    'moved': True,
                    'duration': {'$gt': low_limit, '$lt': high_limit}
                    }
                },
                {'$sort':{
                    'duration': 1
                }
                }]))

        elif coll == 'PermanentParkings':
                    my_collection = list(collection.aggregate([
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
            {'$match':
                {
                'duration': {'$gt': low_limit}
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
        # cnt = 0

        # Calculate CDF
        while True:
            minutes_counter += 1

            for i in range (starting_point, num_of_documents):

                if my_collection[i]['duration'] < minutes_counter*60: # In seconds
                    how_many += 1

                else:
                    starting_point = i
                    break

            duration_list.append(how_many)
            # cnt += 1

            if duration_list[-1] == num_of_documents:
                break

        results = [x/num_of_documents for x in duration_list]

        #%% Plots
        plt.semilogx(range(1,len(duration_list)+1),results)

    #plt.plot(results)
    plt.xlabel('Minutes')
    plt.ylabel('CDF')
    plt.ylim([0, 1])
    plt.legend(['Turin', 'Wien', 'Seattle'], loc=4)
    plt.grid(which='both')
    plt.title(coll)
    plt.show()

print("--- END ---")
