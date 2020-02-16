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
import time
import numpy as np
import seaborn


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

    def run(self, shift=0):
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
            # print('predicted=%f, expected=%f' % (y_hat, history[-1]))
            if shift:
                history = history[1:]

        self.mae = mean_absolute_error(self.test, self.predictions)
        self.mse = mean_squared_error(self.test, self.predictions)
        N = len(self.test)
        summer = [abs((a - b)/a) for a, b in zip(self.test, self.predictions)]
        self.mpe = 100/N * np.sum(summer)
        # print(np.sum(summer))
        # time.sleep(20)
        self.r2_score = r2_score(self.test, self.predictions)

    def plot_arima(self, fig_number):
        """Plot results."""
        plt.figure(fig_number)
        plt.plot(self.predictions, label="order = %s" % (str(self.order)))
        plt.grid(which='both')


def find_missing(lst):
    """Find missing data in a sequence."""
    return [i for x, y in zip(lst, lst[1:])
            for i in range(x + 1, y) if y - x > 1]


def main():
    """Do."""
    print("--- Start ---\n")
    df = read_file("Torino.csv")
    df = df.rename(columns={'count': 'rental'})
    df["hour"] = df["hour"].values.astype(int)  # Convert hour to int

    # Find missing values.
    missing_values = find_missing(df["hour"])
    print("/!\\ Missing values:", missing_values)
    mean_h = round(np.mean(df["rental"]))
    print("--> Filling with average value: %d\n" % mean_h)
    miss_value = pd.DataFrame({"hour": missing_values,
                               "rental": mean_h.astype(int)})

    # Fill missing values with average rental number, sort and reindex.
    df = df.append(miss_value, ignore_index=True)
    df = df.sort_values("hour")
    df = df.reset_index(drop=True)

    # Rolling statistics
    roll_days = 7
    df['MA'] = df['rental'].rolling(24*roll_days).mean()
    df['MS'] = df['rental'].rolling(24*roll_days).std()
    plt.figure()
    plt.plot(df['rental'], label='Number of rentals')
    plt.plot(df['MA'], label='Moving average')
    plt.plot(df['MS'], label='Moving SD')
    plt.title('Rolling statistics, window = %d days' % roll_days)
    plt.grid(which='both')
    plt.legend()

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

    # ARIMA model test
    p = 2
    d = 0  # Because it is stationary
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
    train_size = 24*7
    test_size = 24*7
    p_list = [0, 1]
    q_list = [0, 1]
    d_list = [0]

    results = {"p": [], "d": [], "q": [], "mse": [], "mpe": []}
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
                    results["mpe"].append(my_arima.mpe)

                except Exception as e:
                    print(p, d, q, "\n", e)

    # Plot original test data.
    plt.figure(fig_number)
    plt.plot(X[train_size:train_size + test_size], label="Data")
    plt.legend()

    # Convert results into a dataframe.
    results = pd.DataFrame(results)
    print(results, "\n\n\n")

    # Reshape into a matrix to plot heatmap (MSE).
    heat_df_mse = results.pivot(index='p', columns='q', values='mse')
    fig, ax = plt.subplots()
    ax = seaborn.heatmap(heat_df_mse, cmap='GnBu', annot=True)
    plt.title('Mean squared error')

    # Reshape into a matrix to plot heatmap (MPE).
    heat_df_mpe = results.pivot(index='p', columns='q', values='mpe')
    fig, ax = plt.subplots()
    ax = seaborn.heatmap(heat_df_mpe, cmap='GnBu', annot=True, fmt='.2f')
    plt.title('Mean percentage error')

    best = results["mse"].idxmin()
    print("BEST:\n", results.loc[best])

    # Select best model and plot new forecasts.
    p = results.loc[best]['p'].astype(int)
    d = 1
    q = results.loc[best]['q'].astype(int)

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
