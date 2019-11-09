import pymongo as pm
from pprint import pprint
import pandas as pd

client = pm.MongoClient('bigdatadb.polito.it', ssl=True, authSource='carsharing', tlsAllowInvalidCertificates=True)

db = client["carsharing"]
db.authenticate('ictts', 'Ictts16!')

permanent_bookings = db['PermanentBookings']
permanent_parkings = db['PermanentParkings']
active_bookings = db['ActiveBookings']
active_parkings = db['ActiveParkings']

print("permanent bookings: ", permanent_bookings.count())
print("permanent parkings: ", permanent_parkings.count())
print("active bookings: ", active_bookings.count())
print("active parkings: ", active_parkings.count())

# permanent booking and parking similar because of tot n of cars ideally one car should be booked then parked.

print("distinct cities: ", permanent_bookings.distinct('city'))
print("start end time: ", )

seattle = permanent_bookings.find({}, {'city': 'Seattle'})



