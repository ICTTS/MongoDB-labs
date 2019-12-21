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


def main():
    """Do."""
    folder = os.path.dirname(os.path.abspath(__file__))
    df = read_csv(folder + "\\Torino.csv")
    print(df.head())
    df = df.rename(columns={'count': 'rental'})

    plt.figure()
    pd.plotting.autocorrelation_plot(df["rental"])
    plt.title('Autocorrelation Function')
    plt.grid(which='both')

    # ACF
    acf_ = acf(df["rental"], nlags=48)
    plt.figure()
    plt.plot(acf_, 'o-')
    plt.title('Autocorrelation Function')
    plt.grid(which='both')

    # PACF
    pacf_ = pacf(df["rental"], nlags=48, method='ols')
    plt.figure()
    plt.plot(pacf_, 'o-')
    plt.title('Partial Autocorrelation Function')
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

    residuals.plot(c='r')
    plt.title("Residuals")
    plt.grid(which='both')

    residuals.plot(c='r', kind='kde')
    plt.title("KDE of residuals")
    plt.grid(which='both')


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


if __name__ == '__main__':
    main()
    plt.show()
