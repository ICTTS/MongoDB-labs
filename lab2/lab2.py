#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ICT in Transport Systems - Lab 2."""
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
from sklearn.metrics import (mean_squared_error, mean_absolute_error,
                             r2_score)
from statsmodels.tsa.stattools import acf, pacf
from statsmodels.tsa.arima_model import ARIMA


def read_file(filename):
    """Read file and return dataframe."""
    folder = os.path.dirname(os.path.abspath(__file__))
    df = read_csv(folder + "\\" + filename)
    return df


def main():
    """Do."""
    df = read_file("Torino.csv")
    df = df.rename(columns={'count': 'rental'})

    plt.figure()
    pd.plotting.autocorrelation_plot(df["rental"])
    plt.title('Autocorrelation Function')
    plt.grid(which='both')

    # ACF
    n_lags = 48
    acf_ = acf(df["rental"], nlags=n_lags)
    plt.figure()
    plt.plot(acf_, 'o-')
    plt.title('Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # PACF
    pacf_ = pacf(df["rental"], nlags=n_lags, method='ols')
    plt.figure()
    plt.plot(pacf_, 'o-')
    plt.title('Partial Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # ARIMA model
    p = 2
    q = 2
    d = 0

    model = ARIMA(df["rental"], order=(p, d, q))
    model_fit = model.fit(disp=True)
    plt.figure()
    plt.plot(df["rental"])
    plt.plot(model_fit.fittedvalues)
    plt.grid(which='both')
    plt.legend(["Data", "Fitted"])

    # Redisuals
    residuals = pd.DataFrame(model_fit.resid)
    residuals.plot(c='r', title="Residuals", legend=False)
    plt.grid(which='both')

    fig, ax = plt.subplots()
    residuals.plot(ax=ax, title="KDE of residuals", kind='kde',
                   legend=False)
    n_bins = 20
    residuals.plot(ax=ax, color='#aabad7', edgecolor='white', kind='hist',
                   density=True, bins=n_bins)
    plt.grid(which='both')
    ax.legend(["KDE", "Density %s bins" % n_bins])


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


if __name__ == '__main__':
    main()
    plt.show()
