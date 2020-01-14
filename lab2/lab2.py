#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ICT in Transport Systems - Lab 2."""
import matplotlib.pyplot as plt
import pandas as pd
# import numpy as np
import os
from sklearn.metrics import (mean_squared_error, mean_absolute_error,
                             r2_score)
from statsmodels.tsa.arima_model import ARIMA
from statsmodels.graphics.tsaplots import plot_pacf, plot_acf


def read_file(filename):
    """Read file and return dataframe."""
    folder = os.path.dirname(os.path.abspath(__file__))
    df = read_csv(folder + "\\" + filename)
    return df


class RunArima(object):
    """Fit an ARIMA model and run it."""

    def __init__(self, X, train_size, test_size, p, d, q):
        """Initialise parameters."""
        self.X = X
        self.train_size = train_size
        self.test_size = test_size
        self.predictions = []
        self.order = (p, d, q)
        self.train = X[0:self.train_size]
        self.test = X[self.train_size:self.train_size + self.test_size]

    def run(self, shift):
        """Run the model.
        shift = 1: shifting training window
        shift = 0: expanding training window
        """
        history = [t for t in self.train]

        # Make predictions
        for t in range(self.test_size):
            model = ARIMA(history, order=(self.order))
            model_fit = model.fit(disp=0, maxiter=500, method='css')
            y_hat = model_fit.forecast()[0]
            self.predictions.append(y_hat)
            history.append(self.test[t])
            if shift:
                history = history[1:]

        self.mae = mean_absolute_error(self.test, self.predictions)
        self.mse = mean_squared_error(self.test, self.predictions)
        self.r2_score = r2_score(self.test, self.predictions)

    def plot_arima(self, fig_number):
        """Plot results."""
        plt.figure(fig_number)
        plt.plot(self.predictions, label="order = %s" % (str(self.order)))
        plt.grid(which='both')


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
    train_size = 24*14
    test_size = 96
    p_list = [0, 1, 2, 3, 4, 5]
    q_list = [0, 1, 2]
    d_list = [0]
    # grid_search = np.zeros((len(p_list), len(q_list)))
    results = {"p": [], "d": [], "q": [], "mse": []}
    fig_number = 20  # To plot all data from ARIMA models.
    for p in p_list:
        for q in q_list:
            for d in d_list:
                try:
                    my_arima = RunArima(X, train_size, test_size, p, d, q)
                    my_arima.run(shift=1)
                    my_arima.plot_arima(fig_number)
                    results["p"].append(p)
                    results["d"].append(d)
                    results["q"].append(q)
                    results["mse"].append(my_arima.mse)
                except Exception as e:
                    print(p, d, q, "\n", e)

    # Plot original test data.
    plt.figure(fig_number)
    plt.plot(X[train_size:train_size + test_size], label="Data")
    plt.legend()

    # Convert results into a dataframe.
    results = pd.DataFrame(results)
    print(results, "\n\n\n")
    best = results["mse"].idxmin()
    print("BEST:", results.loc[best])

    # Select best model and plot new forecasts.
    p = 1
    d = 0
    q = 1
    model = ARIMA(df["rental"], order=(p, d, q))
    model_fit = model.fit(disp=True)
    plt.figure()
    plt.plot(df["rental"])
    plt.plot(model_fit.fittedvalues)
    plt.grid(which='both')
    plt.legend(["Data", "Fitted"])
    fig, ax = plt.subplots()
    df.rental.iloc[650:].plot(ax=ax)

    model_fit.plot_predict(ax=ax, start=650, end=800, dynamic=False,
                           plot_insample=False)


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


if __name__ == '__main__':
    main()
    plt.show()
