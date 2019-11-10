#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pymongo as pm
from pprint import pprint
import pandas as pd

client = pm.MongoClient('bigdatadb.polito.it', ssl=True,
                        authSource='carsharing',
                        tlsAllowInvalidCertificates=True)

db = client["carsharing"]
db.authenticate('ictts', 'Ictts16!')

permanent_bookings = db['PermanentBookings']
permanent_parkings = db['PermanentParkings']
active_bookings = db['ActiveBookings']
active_parkings = db['ActiveParkings']

print("permanent bookings: ", permanent_bookings.estimated_document_count())
print("permanent parkings: ", permanent_parkings.estimated_document_count())
print("active bookings: ", active_bookings.estimated_document_count())
print("active parkings: ", active_parkings.estimated_document_count())

# Permanent booking and parking similar because of tot n of cars ideally one
# car should be booked then parked.

print("distinct cities: ", permanent_bookings.distinct('city'))

start_unix = permanent_bookings.find().sort('init_time', 1).limit(1)
end_unix = permanent_bookings.find().sort('init_time', -1).limit(1)

for i in start_unix:
    start = i['init_time']

for i in end_unix:
    end = i['init_time']

print("start: {} end: {}".format(start, end))  # Tuesday 13 December 2016 17:38:23 Wednesday 31 January 2018 13:11:33
