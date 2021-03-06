#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Step 2.7.

a) Extract those valid rentals for which there is also the data for alternative
   transport systems.

b) Consider one alternative transport system, e.g., public transports. Take the
   duration, and divide it into time bins, e.g., [0,5)min, [5,10)min,
   [10,15)min,... Compute then the number of rentals for each bin, i.e., the
   probability of seeing a rental given the duration of public transport would
   be in a given interval. Plot the obtained histogram, and try to comment the
   results.
"""

import pymongo as pm
import matplotlib.pyplot as plt
import time
import datetime
import numpy as np

COLLECTION = 'PermanentBookings'
CITY = 'Torino'

# Rentals
low_limit = 3*60  # Two minutes
high_limit = 3*60*60  # Three hours

high_limit_pt = 5*60*60


def get_collection():
    """Connect to database and return collection."""
    client = pm.MongoClient('bigdatadb.polito.it',
                            ssl=True,
                            authSource='carsharing',
                            tlsAllowInvalidCertificates=True)
    db = client['carsharing']  # Choose the DB to use
    db.authenticate('ictts', 'Ictts16!')
    collection = db[COLLECTION]
    return collection


def pt_duration():
    """Query the database."""
    start = "01/10/2017"
    end = "01/11/2017"
    start_time = time.mktime(datetime.datetime.strptime(start,
                             "%d/%m/%Y").timetuple())
    end_time = time.mktime(datetime.datetime.strptime(end,
                           "%d/%m/%Y").timetuple())

    collection = get_collection()

    my_collection = list(collection.aggregate([
                    {'$match': {
                        '$and': [
                            {'city': CITY},
                            {'public_transport.duration': {'$ne': -1}},
                            {'walking.duration': {'$ne': -1}},
                            {'init_time': {'$gte': start_time,
                                           '$lt': end_time}}]
                    }
                    },
                    {'$project': {
                        '_id': 0,
                        'duration': {'$subtract': ['$final_time',
                                                   '$init_time']},
                        'pt_duration': '$public_transport.duration',
                        'w_duration': '$walking.duration',
                        'moved': {'$ne': [
                            {'$arrayElemAt':
                             ['$origin_destination.coordinates', 0]},
                            {'$arrayElemAt':
                             ['$origin_destination.coordinates', 1]}]}
                    }
                    },
                    {'$match':
                        {
                            'moved': True,
                            'duration': {'$gt': low_limit, '$lt': high_limit},
                            'pt_duration': {'$lt': high_limit_pt},
                            'w_duration': {'$lt': high_limit_pt}
                        }},
                    {'$project': {
                        'pt_duration': 1,
                        'w_duration': 1
                    }
                    },
                    {'$sort': {
                        'pt_duration': 1,
                        'w_duration': 1
                    }
                    },
                    {'$group': {
                        '_id': 'null',
                        'pt_array': {'$push': '$pt_duration'},
                        'w_array': {'$push': '$w_duration'}
                    }
                    },
                    {'$project': {
                        '_id': 0,
                        'pt_array': 1,
                        'w_array': 1
                    }
                    }]))

    return (my_collection[0]['pt_array'], my_collection[0]['w_array'])


def make_hist(array, bins, color, titled, xlim, ylim):
    """Plot a histogram."""
    fig, ax = plt.subplots(constrained_layout=False, figsize=(15, 8))
    plt.hist(np.array(array), bins, ec='black', color=color)
    plt.xlabel(titled + ' duration (minutes)')
    plt.ylabel('No. rentals')
    plt.title('No. rentals given the alternative ' + titled + ' trip'
              ' duration')
    plt.xticks(ticks=bins, labels=bins)
    plt.xlim([0, xlim])
    plt.ylim([0, ylim])
    plt.grid(which='both')
    plt.savefig('step2_7' + titled + '.eps', format='eps')


def main():
    """Call public transport function and make histograms."""
    pt, w = pt_duration()
    pt_duration_array = [x/60 for x in pt]
    w_duration_array = [x/60 for x in w]
    blue = (0, 0.4470, 0.7410)
    orange = (0.8500, 0.3250, 0.0980)
    make_hist(pt_duration_array, list(range(0, 105, 5)), blue,
              'public transport', 150, 4200)
    make_hist(w_duration_array, list(range(0, 155, 5)), orange,
              'walking', 150, 4200)
    plt.show()


if __name__ == '__main__':
    main()
