#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pymongo as pm
from pprint import pprint
import pandas as pd
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

print("- How many documents are present in each collection?")
print("permanent bookings: ", permanent_bookings.estimated_document_count())
print("permanent parkings: ", permanent_parkings.estimated_document_count())
print("active bookings: ", active_bookings.estimated_document_count())
print("active parkings: ", active_parkings.estimated_document_count())

# Permanent booking and parking similar because of tot n of cars ideally one
# car should be booked then parked.
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

print("\n- How many cars are available? (distinct plate)")
print(len(permanent_parkings.distinct("plate", {"city": "Torino"})))
print(len(permanent_parkings.distinct("plate", {"city": "Wien"})))
print(len(permanent_parkings.distinct("plate", {"city": "Seattle"})))