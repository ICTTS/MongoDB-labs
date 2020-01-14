#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ICT in Transport Systems - Lab 2."""
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
import time
from sklearn.metrics import (mean_squared_error, mean_absolute_error,
                             r2_score)
# from statsmodels.tsa.stattools import acf, pacf
from statsmodels.tsa.arima_model import ARIMA
from statsmodels.graphics.tsaplots import plot_pacf, plot_acf


def read_file(filename):
    """Read file and return dataframe."""
    folder = os.path.dirname(os.path.abspath(__file__))
    df = read_csv(folder + "\\" + filename)
    return df


def main():
    """Do."""
    df = read_file("Torino.csv")
    df = df.rename(columns={'count': 'rental'})

    # ACF
    plt.figure()
    pd.plotting.autocorrelation_plot(df["rental"])
    plt.title('Autocorrelation Function')
    plt.grid(which='both')

    # ACF
    n_lags = 48
    fig, ax = plt.subplots()
    plot_acf(df["rental"], ax=ax, lags=n_lags)
    plt.title('Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # PACF
    n_lags = 48
    fig, ax = plt.subplots()
    plot_pacf(df["rental"], ax=ax, lags=n_lags)
    plt.title('Partial Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # ARIMA model
    p = 2
    d = 0
    q = 2

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

    X = df.rental.values.astype(float)
    print("Starting ARIMA model.""")
    train_size = 24*7*2
    test_size = 96
    p_list = [0, 1, 2]
    q_list = [0, 1, 2]
    d_list = [0, 1, 2]
    # grid_search = np.zeros((len(p_list), len(q_list)))
    for p in p_list:
        for q in q_list:
            for d in d_list:
                try:
                    my_arima = run_arima(X, train_size, test_size, p, d, q)
                    my_arima.run()
                    my_arima.plot_arima()
                    print(p, d, q, my_arima.mse)
                except Exception as e:
                    print(p, d, q, "\n", e)

    plt.figure(10)
    plt.plot(X[train_size:train_size + test_size], label="Data")
    plt.legend()
    # print(grid_search)


class run_arima(object):
    """Run ARIMA model."""

    def __init__(self, X, train_size, test_size, p, d, q):
        """Initialise parameters."""
        self.X = X
        self.train_size = train_size
        self.test_size = test_size
        # self.p_list = p_list
        self.predictions = []  # np.zeros(test_size)
        self.p = p
        self.d = d
        self.q = q
        self.train = X[0:self.train_size]
        self.test = X[self.train_size:self.train_size + self.test_size]

    def run(self):
        """Run the model."""
        history = [t for t in self.train]

        # Make predictions
        for t in range(self.test_size):
            model = ARIMA(history, order=(self.p,
                                          self.d,
                                          self.q))
            model_fit = model.fit(disp=0, maxiter=500, method='css')
            y_hat = model_fit.forecast()[0]
            self.predictions.append(y_hat)
            history.append(self.test[t])
            # history = history[1:]

        self.mae = mean_absolute_error(self.test, self.predictions)
        self.mse = mean_squared_error(self.test, self.predictions)
        self.r2_score = r2_score(self.test, self.predictions)

    def plot_arima(self):
        """Plot results."""
        plt.figure(10)
        # print('MAE with p =', self.p, 'is:', self.mae)
        # print('MSE with p =', self.p, 'is:', self.mse)
        # print('R2 with p =', self.p, 'is:', self.r2_score)

        plt.plot(self.predictions, label="p = %s; q = %s; d = %s"
                 % (str(self.p), str(self.q), str(self.d)))
        plt.grid(which='both')


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


if __name__ == '__main__':
    main()
    plt.show()
