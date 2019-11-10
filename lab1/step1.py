#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pymongo as pm
from pprint import pprint
import pandas as pd
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

print("start: {} end: {}".format(start, end))  # Tuesday 13 December 2016 17:38:23 Wednesday 31 January 2018 13:11:33
print("start: {} end: {}".format(time.ctime(start), time.ctime(end)))
# print("edu purpose : ", time.time(), ' ', time.gmtime(start))
# 12/13/2016 @ 5:38pm (UTC) UK time
# 12/13/2016 @ 6:38pm (UTC) IT time
city = ['Torino', 'Wien', 'Seattle']

for i in city:
    available = active_parkings.distinct('plate', {'city': i})
    print('available cars in ', i, ' are : ', len(available))

start_date = "01/12/2017"
start_time = time.mktime(datetime.datetime.strptime(start_date, "%d/%m/%Y").timetuple())
print(start_time)
end_date = "01/1/2018"
end_time = time.mktime(datetime.datetime.strptime(end_date, "%d/%m/%Y").timetuple())
print(end_time)
for i in city:
    dec_city = permanent_bookings.find({'city': i},
                                       {'init_time': {'$gte': start_time, '$lt': end_time}}).count()

    print('booking on december 2017 in ', i, ' are: ', dec_city)

# TODO alternative modes only for turin
