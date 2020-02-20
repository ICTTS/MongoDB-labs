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
# import time
import numpy as np
import seaborn

CITY = "Wien"


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
            model_fit = model.fit(disp=0, maxiter=200, method='css')
            y_hat = model_fit.forecast()[0]
            self.predictions.append(y_hat)
            history.append(self.test[t])
            # print('predicted=%f, expected=%f' % (y_hat, history[-1]))
            if shift:
                history = history[1:]

        self.mae = mean_absolute_error(self.test, self.predictions)
        self.mape = self.mae/np.mean(self.test)*100
        self.mse = mean_squared_error(self.test, self.predictions)
        N = len(self.test)
        summer = [abs((a - b)/a) for a, b in zip(self.test, self.predictions)]
        self.mpe = 100/N * np.sum(summer)
        # print(np.sum(summer))
        # time.sleep(20)
        self.r2_score = r2_score(self.test, self.predictions)

    def plot_arima(self, fig_number):
        """Plot results."""
        plt.figure(fig_number, constrained_layout=True)
        plt.plot(self.predictions, label="order = %s" % (str(self.order)))
        plt.grid(which='both')


def find_missing(lst):
    """Find missing data in a sequence."""
    return [i for x, y in zip(lst, lst[1:])
            for i in range(x + 1, y) if y - x > 1]


def plot_residuals(model_fit, n_bins=20, xlim=4000, title="Residuals"):
    """Plot residuals and KDE histogram."""
    residuals = pd.DataFrame(model_fit.resid)
    residuals.plot(c='r', title="Residuals", legend=False)
    fig, ax = plt.subplots(constrained_layout=True)
    residuals.plot(ax=ax, title="KDE of residuals", kind='kde',
                   legend=False)
    residuals.plot(ax=ax, color='#aabad7', edgecolor='white', kind='hist',
                   density=True, bins=n_bins)
    plt.grid(which='both')
    plt.title(title)
    ax.legend(["KDE", "Density %s bins" % n_bins])
    plt.xlim([-xlim, xlim])


def read_csv(filename):
    """Read csv and save to dataframe."""
    df = pd.read_csv(filename, index_col=0)
    return df


def main():
    """Do."""
    print("--- Start ---\n")
    df = read_file(CITY + ".csv")
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
    plt.figure(constrained_layout=True)
    plt.plot(df['rental'], linewidth=1, label='Number of rentals')
    plt.plot(df['MA'], linewidth=2, color='r', label='Moving average')
    plt.plot(df['MS'], linewidth=2, label='Moving SD')
    plt.title(CITY + '; Rolling statistics; Window = %d days' % roll_days)
    plt.grid(which='both')
    plt.legend()

    # ACF
    plt.figure(constrained_layout=True)
    pd.plotting.autocorrelation_plot(df["rental"])
    plt.title('Autocorrelation Function')
    plt.grid(which='both')

    # ACF
    n_lags = 48
    fig, ax = plt.subplots(constrained_layout=True)
    plot_acf(df["rental"], ax=ax, lags=n_lags)
    plt.title('Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # PACF
    n_lags = 48
    fig, ax = plt.subplots(constrained_layout=True)
    plot_pacf(df["rental"], ax=ax, lags=n_lags)
    plt.title('Partial Autocorrelation Function - no. lags: %d' % n_lags)
    plt.grid(which='both')

    # ARIMA model test
    p = 2  # Looking at the PACF
    d = 0  # Because it is stationary
    q = 2
    order = (p, d, q)
    model = ARIMA(df["rental"], order=order)
    model_fit = model.fit(disp=True)
    plt.figure(constrained_layout=True)
    plt.plot(df["rental"])
    plt.plot(model_fit.fittedvalues)
    plt.grid(which='both')
    plt.legend(["Data", "Fitted"])

    # Redisuals
    plot_residuals(model_fit, 20, 2000, "Residuals; order = %s" % str(order))

    print("Starting ARIMA model.""")
    X = df.rental.values.astype(float)
    train_size = 24*7
    test_size = 24*7
    p_list = [0, 1, 2, 3, 4, 5, 6]
    q_list = [0, 1, 2]
    d_list = [0]

    results = {"p": [], "d": [], "q": [], "mse": [], "mpe": [], "mape": []}
    fig_number = 20  # To plot all data from ARIMA models.
    for p in p_list:
        for q in q_list:
            for d in d_list:
                try:
                    my_arima = RunArima(X, train_size, test_size, p, d, q)
                    my_arima.run(shift=0)
                    my_arima.plot_arima(fig_number)
                    results["p"].append(p)
                    results["d"].append(d)
                    results["q"].append(q)
                    results["mse"].append(my_arima.mse)
                    results["mpe"].append(my_arima.mpe)
                    results["mape"].append(my_arima.mape)

                except Exception:
                    print(p, d, q, "\n")

    # Plot original test data.
    plt.figure(fig_number, constrained_layout=True)
    plt.plot(X[train_size:train_size + test_size], label="Data")
    plt.legend()

    # Convert results into a dataframe.
    results = pd.DataFrame(results)
    print(results, "\n\n\n")

    # Reshape into a matrix to plot heatmap (MSE).
    heat_df_mse = results.pivot(index='p', columns='q', values='mse')
    fig, ax = plt.subplots(constrained_layout=True)
    ax = seaborn.heatmap(heat_df_mse, cmap='GnBu', annot=True)
    plt.title('Mean squared error')

    # Reshape into a matrix to plot heatmap (MPE).
    heat_df_mpe = results.pivot(index='p', columns='q', values='mpe')
    fig, ax = plt.subplots(constrained_layout=True)
    ax = seaborn.heatmap(heat_df_mpe, cmap='GnBu', annot=True, fmt='.2f')
    plt.title('Mean percentage error')

    heat_df_mape = results.pivot(index='p', columns='q', values='mape')
    fig, ax = plt.subplots(constrained_layout=True)
    ax = seaborn.heatmap(heat_df_mape, cmap='GnBu', annot=True, fmt='.2f')
    plt.title('Mean absolute percentage error')

    # Select best model and plot new forecasts.
    best = results["mpe"].idxmin()
    p = results.loc[best]['p'].astype(int)
    d = 0
    q = results.loc[best]['q'].astype(int)
    order = (p, d, q)
    print("BEST: ", order)

    results = {"N": [], "shift": [], "mse": [], "mpe": [], "mape": []}
    # fig_number = 100  # To plot all data from ARIMA models.

    # Change training window size.
    train_size_list = [24*x for x in range(3, 7)]
    test_size = 24*7
    for train_size in train_size_list:
        for shift in [0, 1]:
            try:
                my_arima = RunArima(X, train_size, test_size, p, d, q)
                my_arima.run(shift=0)
                results["N"].append(train_size)
                results["shift"].append(shift)
                results["mse"].append(my_arima.mse)
                results["mpe"].append(my_arima.mpe)
                results["mape"].append(my_arima.mape)

            except Exception:
                print(p, d, q, "\n")

    # Convert results into a dataframe.
    results = pd.DataFrame(results)
    print(results, "\n\n\n")

    # Select best model and plot new forecasts.
    best = results["mpe"].idxmin()
    N = results.loc[best]['N'].astype(int)
    print("BEST: N: %d, shift: %d" % (N, shift))

    # Final model 1
    model = ARIMA(df["rental"], order=(order))
    model_fit = model.fit(disp=True, maxiter=200, method="css-mle")
    plt.figure(constrained_layout=True)
    plt.plot(df["rental"])
    plt.plot(model_fit.fittedvalues)
    plt.grid(which='both')
    plt.legend(["Data", "Fitted"])
    fig, ax = plt.subplots(constrained_layout=True)
    df.rental.iloc[650:].plot(ax=ax)

    model_fit.plot_predict(ax=ax, start=650, end=800, dynamic=False,
                           plot_insample=False)
    plt.title(CITY + " order = " + str(order))
    plot_residuals(model_fit, 20, "Residuals; order = %s" % str(order))

    # Test overfitted model.
    plt.show()
    order = (26, 0, 1)
    model = ARIMA(df["rental"], order=(order))
    model_fit = model.fit(disp=True, maxiter=400, method="css-mle")
    plt.figure(constrained_layout=True)
    plt.plot(df["rental"])
    plt.plot(model_fit.fittedvalues)
    plt.grid(which='both')
    plt.legend(["Data", "Fitted"])
    fig, ax = plt.subplots(constrained_layout=True)
    df.rental.iloc[650:].plot(ax=ax)

    model_fit.plot_predict(ax=ax, start=650, end=800, dynamic=False,
                           plot_insample=False)
    plt.title(CITY + " order = " + str(order))
    plot_residuals(model_fit, 20, "Residuals; order = %s" % str(order))


if __name__ == '__main__':
    main()
    plt.show()
