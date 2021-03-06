#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 1: Preliminary data analysis."""
import pymongo as pm
import time
import datetime

client = pm.MongoClient('bigdatadb.polito.it', ssl=True,
                        authSource='carsharing',
                        tlsAllowInvalidCertificates=True)

db = client["carsharing"]
db.authenticate('ictts', 'Ictts16!')

permanent_bookings = db['PermanentBookings']
permanent_parkings = db['PermanentParkings']
active_bookings = db['ActiveBookings']
active_parkings = db['ActiveParkings']

city = ['Torino', 'Wien', 'Seattle']

print("- How many documents are present in each collection?")
print("permanent bookings: ", permanent_bookings.estimated_document_count())
print("permanent parkings: ", permanent_parkings.estimated_document_count())
print("active bookings: ", active_bookings.estimated_document_count())
print("active parkings: ", active_parkings.estimated_document_count())

print("\n- For which cities the system is collecting data?")
print(permanent_bookings.distinct('city'))

start_unix = permanent_bookings.find().sort('init_time', 1).limit(1)
end_unix = permanent_bookings.find().sort('init_time', -1).limit(1)

for i in start_unix:
    start = i['init_time']

for i in end_unix:
    end = i['init_time']

print("\n- When the collection started? When the collection ended?")
print("start:", datetime.datetime.utcfromtimestamp(start).strftime('%d-%m-%Y '
                                                                   '%H:%M:%S'))
print("end  :", datetime.datetime.utcfromtimestamp(end).strftime('%d-%m-%Y '
                                                                 '%H:%M:%S'))

print("\n- How many cars are available?")
print(active_parkings.count_documents({"city": "Torino"}))
print(active_parkings.count_documents({"city": "Wien"}))
print(active_parkings.count_documents({"city": "Seattle"}))
for i in city:
    available = active_parkings.distinct('plate', {'city': i})
    print('available cars in ', i, ' are : ', len(available))

print("\n- How many cars are available? (distinct plate)")
print(len(permanent_parkings.distinct("plate", {"city": "Torino"})))
print(len(permanent_parkings.distinct("plate", {"city": "Wien"})))
print(len(permanent_parkings.distinct("plate", {"city": "Seattle"})))

print("\n- Bookings on December 2017?")
start_date = "01/12/2017"
start_time = time.mktime(datetime.datetime.strptime(start_date,
                                                    "%d/%m/%Y").timetuple())
end_date = "01/1/2018"
end_time = time.mktime(datetime.datetime.strptime(end_date,
                                                  "%d/%m/%Y").timetuple())
for i in city:
    dec_city = permanent_bookings.find({'city': i,
                                        'init_time': {'$gte': start_time,
                                                      '$lt': end_time}})

    print('booking on december 2017 in ', i, ' are: ', len(list(dec_city)))

# Alternative modes for Turin and Wien
torino_altern = list(permanent_bookings.aggregate([
    {'$match': {'$and': [
        {'city': 'Torino'},
        {'walking.duration': {'$ne': -1}},
        {'public_transport.duration': {'$ne': -1}}
    ]}},
    {'$project': {'_id': 0}}
]))
wien_altern = list(permanent_bookings.aggregate([
    {'$match': {'$and': [
        {'city': 'Wien'},
        {'walking.duration': {'$ne': -1}},
        {'public_transport.duration': {'$ne': -1}}
    ]}},
    {'$project': {'_id': 0}}
]))

print('alternative booking in turin was: ', len(torino_altern))
print('alternative booking in wien was: ', len(wien_altern))
