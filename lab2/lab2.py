#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ICT in Transport Systems - Lab 2."""
import matplotlib.pyplot as plt
import time
import datetime
import numpy as np
import pandas as pd
import os
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import r2_score


def main():
    """Do."""
    folder = os.path.dirname(os.path.abspath(__file__))
    turin = read_csv(folder + "\\Torino.csv")
    print(turin.head())
    turin = turin.rename(columns={'count': 'rental', 'hour': 'hour'})
    plt.figure()
    turin.plot()
    plt.figure()
    pd.plotting.autocorrelation_plot(turin.rental)
    plt.title('ACF')
    plt.show()


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


if __name__ == '__main__':
    main()
