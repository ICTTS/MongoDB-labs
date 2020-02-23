function init() {
	var map = L.map('map').setView([45.05, 7.68], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1tZXh6ZXJvIiwiYSI6ImNrNDQxZGM2ODBjdXMzbHFjY2Q4a3pmcTkifQ.In0w6DLJD7wynhMCgEmV7A', {
maxZoom: 18,
id: 'mapbox/streets-v11'
}).addTo(map);

var lines = [
    {
        "type": "Feature",
        "properties": {
            "load": 19736,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.0
                ],
                [
                    7.564,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19906,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.004495
                ],
                [
                    7.564,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19067,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.00899
                ],
                [
                    7.564,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19066,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.013485
                ],
                [
                    7.564,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19006,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.01798
                ],
                [
                    7.564,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19638,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.022475
                ],
                [
                    7.564,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19158,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.02697
                ],
                [
                    7.564,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19645,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.031465
                ],
                [
                    7.564,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19718,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.03596
                ],
                [
                    7.564,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19320,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.040455
                ],
                [
                    7.564,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19212,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.04495
                ],
                [
                    7.564,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19372,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.049445
                ],
                [
                    7.564,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19532,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.05394
                ],
                [
                    7.564,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19445,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.058435
                ],
                [
                    7.564,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19060,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.06293
                ],
                [
                    7.564,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19455,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.067425
                ],
                [
                    7.564,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19788,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.07192
                ],
                [
                    7.564,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19134,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.076415
                ],
                [
                    7.564,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19617,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.08091
                ],
                [
                    7.564,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19869,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.085405
                ],
                [
                    7.564,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19765,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.0899
                ],
                [
                    7.564,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19706,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.094395
                ],
                [
                    7.564,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19604,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.09889
                ],
                [
                    7.564,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19304,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.103385
                ],
                [
                    7.564,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19418,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.10788
                ],
                [
                    7.564,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19516,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.112375
                ],
                [
                    7.564,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19373,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.11687
                ],
                [
                    7.564,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19116,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.121365
                ],
                [
                    7.564,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19831,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.12586
                ],
                [
                    7.564,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19322,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.564,
                    45.130355
                ],
                [
                    7.564,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19354,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.0
                ],
                [
                    7.570358,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19249,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.004495
                ],
                [
                    7.570358,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19183,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.00899
                ],
                [
                    7.570358,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19025,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.013485
                ],
                [
                    7.570358,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19006,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.01798
                ],
                [
                    7.570358,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19082,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.022475
                ],
                [
                    7.570358,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19593,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.02697
                ],
                [
                    7.570358,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19080,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.031465
                ],
                [
                    7.570358,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19320,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.03596
                ],
                [
                    7.570358,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19546,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.040455
                ],
                [
                    7.570358,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19088,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.04495
                ],
                [
                    7.570358,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19156,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.049445
                ],
                [
                    7.570358,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19381,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.05394
                ],
                [
                    7.570358,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19280,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.058435
                ],
                [
                    7.570358,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19006,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.06293
                ],
                [
                    7.570358,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19465,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.067425
                ],
                [
                    7.570358,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19626,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.07192
                ],
                [
                    7.570358,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19234,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.076415
                ],
                [
                    7.570358,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19099,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.08091
                ],
                [
                    7.570358,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19640,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.085405
                ],
                [
                    7.570358,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19592,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.0899
                ],
                [
                    7.570358,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19298,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.094395
                ],
                [
                    7.570358,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19771,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.09889
                ],
                [
                    7.570358,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19049,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.103385
                ],
                [
                    7.570358,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19803,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.10788
                ],
                [
                    7.570358,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19390,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.112375
                ],
                [
                    7.570358,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19435,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.11687
                ],
                [
                    7.570358,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19647,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.121365
                ],
                [
                    7.570358,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19132,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.12586
                ],
                [
                    7.570358,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19744,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.570358,
                    45.130355
                ],
                [
                    7.570358,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19763,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.0
                ],
                [
                    7.576716,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19389,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.004495
                ],
                [
                    7.576716,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19086,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.00899
                ],
                [
                    7.576716,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19706,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.013485
                ],
                [
                    7.576716,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19424,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.01798
                ],
                [
                    7.576716,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19635,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.022475
                ],
                [
                    7.576716,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19659,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.02697
                ],
                [
                    7.576716,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19349,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.031465
                ],
                [
                    7.576716,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19900,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.03596
                ],
                [
                    7.576716,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19625,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.040455
                ],
                [
                    7.576716,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19449,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.04495
                ],
                [
                    7.576716,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19308,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.049445
                ],
                [
                    7.576716,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19387,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.05394
                ],
                [
                    7.576716,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19119,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.058435
                ],
                [
                    7.576716,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19903,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.06293
                ],
                [
                    7.576716,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19533,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.067425
                ],
                [
                    7.576716,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19338,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.07192
                ],
                [
                    7.576716,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19186,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.076415
                ],
                [
                    7.576716,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19335,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.08091
                ],
                [
                    7.576716,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19748,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.085405
                ],
                [
                    7.576716,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19401,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.0899
                ],
                [
                    7.576716,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19557,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.094395
                ],
                [
                    7.576716,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19728,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.09889
                ],
                [
                    7.576716,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19136,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.103385
                ],
                [
                    7.576716,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19537,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.10788
                ],
                [
                    7.576716,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19694,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.112375
                ],
                [
                    7.576716,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19122,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.11687
                ],
                [
                    7.576716,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19910,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.121365
                ],
                [
                    7.576716,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19923,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.12586
                ],
                [
                    7.576716,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19933,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.576716,
                    45.130355
                ],
                [
                    7.576716,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19210,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.0
                ],
                [
                    7.583074,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19649,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.004495
                ],
                [
                    7.583074,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19401,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.00899
                ],
                [
                    7.583074,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19184,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.013485
                ],
                [
                    7.583074,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19540,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.01798
                ],
                [
                    7.583074,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19967,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.022475
                ],
                [
                    7.583074,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19970,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.02697
                ],
                [
                    7.583074,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19501,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.031465
                ],
                [
                    7.583074,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19201,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.03596
                ],
                [
                    7.583074,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19656,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.040455
                ],
                [
                    7.583074,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19770,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.04495
                ],
                [
                    7.583074,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19005,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.049445
                ],
                [
                    7.583074,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19563,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.05394
                ],
                [
                    7.583074,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19104,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.058435
                ],
                [
                    7.583074,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19235,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.06293
                ],
                [
                    7.583074,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19655,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.067425
                ],
                [
                    7.583074,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19764,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.07192
                ],
                [
                    7.583074,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19854,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.076415
                ],
                [
                    7.583074,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19748,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.08091
                ],
                [
                    7.583074,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19760,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.085405
                ],
                [
                    7.583074,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19712,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.0899
                ],
                [
                    7.583074,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19637,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.094395
                ],
                [
                    7.583074,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19254,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.09889
                ],
                [
                    7.583074,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19314,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.103385
                ],
                [
                    7.583074,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19848,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.10788
                ],
                [
                    7.583074,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19824,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.112375
                ],
                [
                    7.583074,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19574,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.11687
                ],
                [
                    7.583074,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19898,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.121365
                ],
                [
                    7.583074,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19867,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.12586
                ],
                [
                    7.583074,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19631,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.583074,
                    45.130355
                ],
                [
                    7.583074,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19317,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.0
                ],
                [
                    7.589432,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19214,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.004495
                ],
                [
                    7.589432,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18781,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.00899
                ],
                [
                    7.589432,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19238,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.013485
                ],
                [
                    7.589432,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18597,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.01798
                ],
                [
                    7.589432,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18929,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.022475
                ],
                [
                    7.589432,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16742,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.02697
                ],
                [
                    7.589432,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13177,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.031465
                ],
                [
                    7.589432,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24673,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.03596
                ],
                [
                    7.589432,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13705,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.040455
                ],
                [
                    7.589432,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22326,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.04495
                ],
                [
                    7.589432,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14497,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.049445
                ],
                [
                    7.589432,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16227,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.05394
                ],
                [
                    7.589432,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16553,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.058435
                ],
                [
                    7.589432,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22475,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.06293
                ],
                [
                    7.589432,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20126,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.067425
                ],
                [
                    7.589432,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16549,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.07192
                ],
                [
                    7.589432,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16346,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.076415
                ],
                [
                    7.589432,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21866,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.08091
                ],
                [
                    7.589432,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24255,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.085405
                ],
                [
                    7.589432,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15690,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.0899
                ],
                [
                    7.589432,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25291,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.094395
                ],
                [
                    7.589432,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23513,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.09889
                ],
                [
                    7.589432,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18840,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.103385
                ],
                [
                    7.589432,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20153,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.10788
                ],
                [
                    7.589432,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19427,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.112375
                ],
                [
                    7.589432,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19058,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.11687
                ],
                [
                    7.589432,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19419,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.121365
                ],
                [
                    7.589432,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19322,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.12586
                ],
                [
                    7.589432,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19043,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.589432,
                    45.130355
                ],
                [
                    7.589432,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20232,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.0
                ],
                [
                    7.59579,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20172,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.004495
                ],
                [
                    7.59579,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20348,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.00899
                ],
                [
                    7.59579,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19665,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.013485
                ],
                [
                    7.59579,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18713,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.01798
                ],
                [
                    7.59579,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17468,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.022475
                ],
                [
                    7.59579,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20822,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.02697
                ],
                [
                    7.59579,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22826,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.031465
                ],
                [
                    7.59579,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25063,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.03596
                ],
                [
                    7.59579,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25077,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.040455
                ],
                [
                    7.59579,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22470,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.04495
                ],
                [
                    7.59579,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14696,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.049445
                ],
                [
                    7.59579,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20193,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.05394
                ],
                [
                    7.59579,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22086,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.058435
                ],
                [
                    7.59579,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25798,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.06293
                ],
                [
                    7.59579,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14690,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.067425
                ],
                [
                    7.59579,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23462,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.07192
                ],
                [
                    7.59579,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16519,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.076415
                ],
                [
                    7.59579,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14781,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.08091
                ],
                [
                    7.59579,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24251,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.085405
                ],
                [
                    7.59579,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22067,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.0899
                ],
                [
                    7.59579,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25277,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.094395
                ],
                [
                    7.59579,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19076,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.09889
                ],
                [
                    7.59579,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20455,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.103385
                ],
                [
                    7.59579,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17969,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.10788
                ],
                [
                    7.59579,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19118,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.112375
                ],
                [
                    7.59579,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19003,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.11687
                ],
                [
                    7.59579,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19253,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.121365
                ],
                [
                    7.59579,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19214,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.12586
                ],
                [
                    7.59579,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19279,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.59579,
                    45.130355
                ],
                [
                    7.59579,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19058,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.0
                ],
                [
                    7.602148,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19174,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.004495
                ],
                [
                    7.602148,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19004,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.00899
                ],
                [
                    7.602148,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20135,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.013485
                ],
                [
                    7.602148,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14495,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.01798
                ],
                [
                    7.602148,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18073,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.022475
                ],
                [
                    7.602148,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15101,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.02697
                ],
                [
                    7.602148,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23534,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.031465
                ],
                [
                    7.602148,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13882,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.03596
                ],
                [
                    7.602148,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17356,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.040455
                ],
                [
                    7.602148,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17889,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.04495
                ],
                [
                    7.602148,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20006,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.049445
                ],
                [
                    7.602148,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16079,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.05394
                ],
                [
                    7.602148,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13561,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.058435
                ],
                [
                    7.602148,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25034,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.06293
                ],
                [
                    7.602148,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14497,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.067425
                ],
                [
                    7.602148,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21367,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.07192
                ],
                [
                    7.602148,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18831,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.076415
                ],
                [
                    7.602148,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17881,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.08091
                ],
                [
                    7.602148,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17474,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.085405
                ],
                [
                    7.602148,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14036,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.0899
                ],
                [
                    7.602148,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16631,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.094395
                ],
                [
                    7.602148,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25148,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.09889
                ],
                [
                    7.602148,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23503,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.103385
                ],
                [
                    7.602148,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25927,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.10788
                ],
                [
                    7.602148,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17149,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.112375
                ],
                [
                    7.602148,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19339,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.11687
                ],
                [
                    7.602148,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19254,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.121365
                ],
                [
                    7.602148,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19310,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.12586
                ],
                [
                    7.602148,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19291,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.130355
                ],
                [
                    7.602148,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19396,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.0
                ],
                [
                    7.608506,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19723,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.004495
                ],
                [
                    7.608506,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20000,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.00899
                ],
                [
                    7.608506,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20935,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.013485
                ],
                [
                    7.608506,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21708,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.01798
                ],
                [
                    7.608506,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20478,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.022475
                ],
                [
                    7.608506,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23981,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.02697
                ],
                [
                    7.608506,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16982,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.031465
                ],
                [
                    7.608506,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16668,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.03596
                ],
                [
                    7.608506,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20634,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.040455
                ],
                [
                    7.608506,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25103,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.04495
                ],
                [
                    7.608506,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20211,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.049445
                ],
                [
                    7.608506,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25615,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.05394
                ],
                [
                    7.608506,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23184,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.058435
                ],
                [
                    7.608506,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17602,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.06293
                ],
                [
                    7.608506,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14363,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.067425
                ],
                [
                    7.608506,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15734,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.07192
                ],
                [
                    7.608506,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17444,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.076415
                ],
                [
                    7.608506,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15553,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.08091
                ],
                [
                    7.608506,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17563,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.085405
                ],
                [
                    7.608506,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16198,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.0899
                ],
                [
                    7.608506,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22422,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.094395
                ],
                [
                    7.608506,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18745,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.09889
                ],
                [
                    7.608506,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23675,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.103385
                ],
                [
                    7.608506,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17136,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.10788
                ],
                [
                    7.608506,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16475,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.112375
                ],
                [
                    7.608506,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15831,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.11687
                ],
                [
                    7.608506,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19427,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.121365
                ],
                [
                    7.608506,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19286,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.12586
                ],
                [
                    7.608506,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19059,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.130355
                ],
                [
                    7.608506,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20203,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.0
                ],
                [
                    7.614864,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20059,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.004495
                ],
                [
                    7.614864,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24993,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.00899
                ],
                [
                    7.614864,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14991,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.013485
                ],
                [
                    7.614864,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13128,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.01798
                ],
                [
                    7.614864,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15606,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.022475
                ],
                [
                    7.614864,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18704,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.02697
                ],
                [
                    7.614864,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23318,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.031465
                ],
                [
                    7.614864,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13487,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.03596
                ],
                [
                    7.614864,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16284,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.040455
                ],
                [
                    7.614864,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18986,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.04495
                ],
                [
                    7.614864,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19657,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.049445
                ],
                [
                    7.614864,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18227,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.05394
                ],
                [
                    7.614864,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22849,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.058435
                ],
                [
                    7.614864,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13585,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.06293
                ],
                [
                    7.614864,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25713,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.067425
                ],
                [
                    7.614864,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13029,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.07192
                ],
                [
                    7.614864,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25788,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.076415
                ],
                [
                    7.614864,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17206,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.08091
                ],
                [
                    7.614864,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13495,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.085405
                ],
                [
                    7.614864,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15652,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.0899
                ],
                [
                    7.614864,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22301,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.094395
                ],
                [
                    7.614864,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14985,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.09889
                ],
                [
                    7.614864,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18958,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.103385
                ],
                [
                    7.614864,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14302,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.10788
                ],
                [
                    7.614864,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21839,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.112375
                ],
                [
                    7.614864,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17813,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.11687
                ],
                [
                    7.614864,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19758,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.121365
                ],
                [
                    7.614864,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19030,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.12586
                ],
                [
                    7.614864,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19040,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.130355
                ],
                [
                    7.614864,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20031,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.0
                ],
                [
                    7.621222,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13181,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.004495
                ],
                [
                    7.621222,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21534,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.00899
                ],
                [
                    7.621222,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25755,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.013485
                ],
                [
                    7.621222,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24699,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.01798
                ],
                [
                    7.621222,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23302,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.022475
                ],
                [
                    7.621222,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13655,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.02697
                ],
                [
                    7.621222,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15471,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.031465
                ],
                [
                    7.621222,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18023,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.03596
                ],
                [
                    7.621222,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25772,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.040455
                ],
                [
                    7.621222,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21541,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.04495
                ],
                [
                    7.621222,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15709,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.049445
                ],
                [
                    7.621222,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15955,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.05394
                ],
                [
                    7.621222,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24485,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.058435
                ],
                [
                    7.621222,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18010,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.06293
                ],
                [
                    7.621222,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16509,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.067425
                ],
                [
                    7.621222,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19037,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.07192
                ],
                [
                    7.621222,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18363,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.076415
                ],
                [
                    7.621222,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20507,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.08091
                ],
                [
                    7.621222,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23642,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.085405
                ],
                [
                    7.621222,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19222,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.0899
                ],
                [
                    7.621222,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23448,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.094395
                ],
                [
                    7.621222,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25090,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.09889
                ],
                [
                    7.621222,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15748,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.103385
                ],
                [
                    7.621222,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24145,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.10788
                ],
                [
                    7.621222,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14353,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.112375
                ],
                [
                    7.621222,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16481,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.11687
                ],
                [
                    7.621222,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13362,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.121365
                ],
                [
                    7.621222,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19210,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.12586
                ],
                [
                    7.621222,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19152,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.130355
                ],
                [
                    7.621222,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17736,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.0
                ],
                [
                    7.62758,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14091,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.004495
                ],
                [
                    7.62758,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15780,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.00899
                ],
                [
                    7.62758,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17892,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.013485
                ],
                [
                    7.62758,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19539,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.01798
                ],
                [
                    7.62758,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18678,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.022475
                ],
                [
                    7.62758,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19974,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.02697
                ],
                [
                    7.62758,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17940,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.031465
                ],
                [
                    7.62758,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15133,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.03596
                ],
                [
                    7.62758,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21386,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
                ],
                [
                    7.62758,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14819,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.04495
                ],
                [
                    7.62758,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24111,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.049445
                ],
                [
                    7.62758,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20703,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.05394
                ],
                [
                    7.62758,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24261,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.058435
                ],
                [
                    7.62758,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18440,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.06293
                ],
                [
                    7.62758,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19300,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.067425
                ],
                [
                    7.62758,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23700,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.07192
                ],
                [
                    7.62758,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22733,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.076415
                ],
                [
                    7.62758,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18643,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.08091
                ],
                [
                    7.62758,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15127,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.085405
                ],
                [
                    7.62758,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16260,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.0899
                ],
                [
                    7.62758,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15394,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.094395
                ],
                [
                    7.62758,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19524,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.09889
                ],
                [
                    7.62758,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23614,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.103385
                ],
                [
                    7.62758,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21563,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.10788
                ],
                [
                    7.62758,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22818,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.112375
                ],
                [
                    7.62758,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13320,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.11687
                ],
                [
                    7.62758,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21786,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.121365
                ],
                [
                    7.62758,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21196,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.12586
                ],
                [
                    7.62758,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19079,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.130355
                ],
                [
                    7.62758,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18835,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.0
                ],
                [
                    7.633938,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15395,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.004495
                ],
                [
                    7.633938,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16339,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.00899
                ],
                [
                    7.633938,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25165,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.013485
                ],
                [
                    7.633938,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14150,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.01798
                ],
                [
                    7.633938,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16612,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.022475
                ],
                [
                    7.633938,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24122,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.02697
                ],
                [
                    7.633938,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21835,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.031465
                ],
                [
                    7.633938,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19053,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.03596
                ],
                [
                    7.633938,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18335,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.040455
                ],
                [
                    7.633938,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25049,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.04495
                ],
                [
                    7.633938,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22107,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.049445
                ],
                [
                    7.633938,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18165,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.05394
                ],
                [
                    7.633938,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19535,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.058435
                ],
                [
                    7.633938,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19563,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.06293
                ],
                [
                    7.633938,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14242,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.067425
                ],
                [
                    7.633938,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16253,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.07192
                ],
                [
                    7.633938,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17693,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.076415
                ],
                [
                    7.633938,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22539,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.08091
                ],
                [
                    7.633938,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23212,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.085405
                ],
                [
                    7.633938,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20992,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.0899
                ],
                [
                    7.633938,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13377,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.094395
                ],
                [
                    7.633938,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23377,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.09889
                ],
                [
                    7.633938,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18853,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.103385
                ],
                [
                    7.633938,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23607,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.10788
                ],
                [
                    7.633938,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13659,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.112375
                ],
                [
                    7.633938,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22510,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.11687
                ],
                [
                    7.633938,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18860,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.121365
                ],
                [
                    7.633938,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21831,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.12586
                ],
                [
                    7.633938,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19972,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.130355
                ],
                [
                    7.633938,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13544,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.0
                ],
                [
                    7.640296,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13753,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.004495
                ],
                [
                    7.640296,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25032,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.00899
                ],
                [
                    7.640296,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18708,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.013485
                ],
                [
                    7.640296,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23800,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.01798
                ],
                [
                    7.640296,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19870,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.022475
                ],
                [
                    7.640296,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18728,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.02697
                ],
                [
                    7.640296,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22507,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.031465
                ],
                [
                    7.640296,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20447,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.03596
                ],
                [
                    7.640296,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24136,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.040455
                ],
                [
                    7.640296,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18014,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.04495
                ],
                [
                    7.640296,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18110,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.049445
                ],
                [
                    7.640296,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25458,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.05394
                ],
                [
                    7.640296,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18782,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
                ],
                [
                    7.640296,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14350,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.06293
                ],
                [
                    7.640296,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19838,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.067425
                ],
                [
                    7.640296,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24001,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.07192
                ],
                [
                    7.640296,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18411,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.076415
                ],
                [
                    7.640296,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23295,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.08091
                ],
                [
                    7.640296,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17612,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.085405
                ],
                [
                    7.640296,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18202,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.0899
                ],
                [
                    7.640296,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21888,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.094395
                ],
                [
                    7.640296,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14502,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.09889
                ],
                [
                    7.640296,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13900,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.103385
                ],
                [
                    7.640296,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18192,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.10788
                ],
                [
                    7.640296,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25220,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.112375
                ],
                [
                    7.640296,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24066,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.11687
                ],
                [
                    7.640296,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19717,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.121365
                ],
                [
                    7.640296,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25264,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.12586
                ],
                [
                    7.640296,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24514,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.130355
                ],
                [
                    7.640296,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23822,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.0
                ],
                [
                    7.646654,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17566,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.004495
                ],
                [
                    7.646654,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13636,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.00899
                ],
                [
                    7.646654,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18223,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.013485
                ],
                [
                    7.646654,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24947,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.01798
                ],
                [
                    7.646654,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20247,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.022475
                ],
                [
                    7.646654,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21787,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.02697
                ],
                [
                    7.646654,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13644,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
                ],
                [
                    7.646654,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17946,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.03596
                ],
                [
                    7.646654,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14272,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.040455
                ],
                [
                    7.646654,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22675,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.04495
                ],
                [
                    7.646654,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20620,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.049445
                ],
                [
                    7.646654,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21059,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
                ],
                [
                    7.646654,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25196,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
                ],
                [
                    7.646654,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24415,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.06293
                ],
                [
                    7.646654,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21150,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
                ],
                [
                    7.646654,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20744,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
                ],
                [
                    7.646654,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24093,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.076415
                ],
                [
                    7.646654,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16086,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.08091
                ],
                [
                    7.646654,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19321,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.085405
                ],
                [
                    7.646654,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17872,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.0899
                ],
                [
                    7.646654,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13812,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.094395
                ],
                [
                    7.646654,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15556,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.09889
                ],
                [
                    7.646654,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18501,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.103385
                ],
                [
                    7.646654,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17812,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.10788
                ],
                [
                    7.646654,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17282,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.112375
                ],
                [
                    7.646654,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13662,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.11687
                ],
                [
                    7.646654,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20158,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.121365
                ],
                [
                    7.646654,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18973,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.12586
                ],
                [
                    7.646654,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25694,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.130355
                ],
                [
                    7.646654,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15969,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.0
                ],
                [
                    7.653012,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24652,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.004495
                ],
                [
                    7.653012,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22648,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.00899
                ],
                [
                    7.653012,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22604,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.013485
                ],
                [
                    7.653012,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17371,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.01798
                ],
                [
                    7.653012,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15432,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.022475
                ],
                [
                    7.653012,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13726,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.02697
                ],
                [
                    7.653012,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20639,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.031465
                ],
                [
                    7.653012,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24758,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.03596
                ],
                [
                    7.653012,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16946,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.040455
                ],
                [
                    7.653012,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16107,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.04495
                ],
                [
                    7.653012,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24586,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.049445
                ],
                [
                    7.653012,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16600,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
                ],
                [
                    7.653012,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23680,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
                ],
                [
                    7.653012,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19980,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.06293
                ],
                [
                    7.653012,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25777,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
                ],
                [
                    7.653012,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14122,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.07192
                ],
                [
                    7.653012,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22484,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
                ],
                [
                    7.653012,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22789,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
                ],
                [
                    7.653012,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19617,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.085405
                ],
                [
                    7.653012,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23388,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.0899
                ],
                [
                    7.653012,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13546,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.094395
                ],
                [
                    7.653012,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14386,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.09889
                ],
                [
                    7.653012,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19370,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.103385
                ],
                [
                    7.653012,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22793,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.10788
                ],
                [
                    7.653012,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16317,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.112375
                ],
                [
                    7.653012,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19114,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.11687
                ],
                [
                    7.653012,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21925,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.121365
                ],
                [
                    7.653012,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14917,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.12586
                ],
                [
                    7.653012,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22966,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.130355
                ],
                [
                    7.653012,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14562,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.0
                ],
                [
                    7.65937,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16093,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.004495
                ],
                [
                    7.65937,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15277,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.00899
                ],
                [
                    7.65937,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17342,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.013485
                ],
                [
                    7.65937,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24516,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.01798
                ],
                [
                    7.65937,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20726,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.022475
                ],
                [
                    7.65937,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21655,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.02697
                ],
                [
                    7.65937,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13784,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.031465
                ],
                [
                    7.65937,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25052,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.03596
                ],
                [
                    7.65937,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14327,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.040455
                ],
                [
                    7.65937,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21150,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.04495
                ],
                [
                    7.65937,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20378,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
                ],
                [
                    7.65937,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19487,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
                ],
                [
                    7.65937,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14853,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.058435
                ],
                [
                    7.65937,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13390,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.06293
                ],
                [
                    7.65937,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15440,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
                ],
                [
                    7.65937,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15001,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
                ],
                [
                    7.65937,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15204,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
                ],
                [
                    7.65937,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19049,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
                ],
                [
                    7.65937,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19335,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.085405
                ],
                [
                    7.65937,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13240,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.0899
                ],
                [
                    7.65937,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24113,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.094395
                ],
                [
                    7.65937,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14124,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.09889
                ],
                [
                    7.65937,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14086,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.103385
                ],
                [
                    7.65937,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24598,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.10788
                ],
                [
                    7.65937,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18970,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.112375
                ],
                [
                    7.65937,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23510,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.11687
                ],
                [
                    7.65937,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18422,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.121365
                ],
                [
                    7.65937,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16308,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.12586
                ],
                [
                    7.65937,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22698,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.130355
                ],
                [
                    7.65937,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21021,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.0
                ],
                [
                    7.665728,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21772,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.004495
                ],
                [
                    7.665728,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22279,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.00899
                ],
                [
                    7.665728,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24502,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.013485
                ],
                [
                    7.665728,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15286,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.01798
                ],
                [
                    7.665728,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17353,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.022475
                ],
                [
                    7.665728,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19514,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.02697
                ],
                [
                    7.665728,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13092,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
                ],
                [
                    7.665728,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23968,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.03596
                ],
                [
                    7.665728,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17325,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.040455
                ],
                [
                    7.665728,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23210,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.04495
                ],
                [
                    7.665728,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25358,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.049445
                ],
                [
                    7.665728,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16707,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
                ],
                [
                    7.665728,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16718,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
                ],
                [
                    7.665728,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25214,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.06293
                ],
                [
                    7.665728,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16553,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
                ],
                [
                    7.665728,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13462,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
                ],
                [
                    7.665728,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21502,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
                ],
                [
                    7.665728,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17653,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.08091
                ],
                [
                    7.665728,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20288,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.085405
                ],
                [
                    7.665728,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25790,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.0899
                ],
                [
                    7.665728,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22589,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.094395
                ],
                [
                    7.665728,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17381,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.09889
                ],
                [
                    7.665728,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19152,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.103385
                ],
                [
                    7.665728,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24121,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.10788
                ],
                [
                    7.665728,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23607,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.112375
                ],
                [
                    7.665728,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15426,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.11687
                ],
                [
                    7.665728,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18507,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.121365
                ],
                [
                    7.665728,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18287,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.12586
                ],
                [
                    7.665728,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21912,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.130355
                ],
                [
                    7.665728,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14884,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.0
                ],
                [
                    7.672086,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15376,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.004495
                ],
                [
                    7.672086,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15589,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.00899
                ],
                [
                    7.672086,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25619,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.013485
                ],
                [
                    7.672086,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14479,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.01798
                ],
                [
                    7.672086,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21622,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.022475
                ],
                [
                    7.672086,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18011,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.02697
                ],
                [
                    7.672086,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17642,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.031465
                ],
                [
                    7.672086,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15804,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.03596
                ],
                [
                    7.672086,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14875,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.040455
                ],
                [
                    7.672086,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15805,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
                ],
                [
                    7.672086,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18072,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.049445
                ],
                [
                    7.672086,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22094,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
                ],
                [
                    7.672086,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24421,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
                ],
                [
                    7.672086,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20683,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
                ],
                [
                    7.672086,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15793,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
                ],
                [
                    7.672086,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20211,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.07192
                ],
                [
                    7.672086,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17133,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
                ],
                [
                    7.672086,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14585,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.08091
                ],
                [
                    7.672086,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22266,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.085405
                ],
                [
                    7.672086,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16794,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.0899
                ],
                [
                    7.672086,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19541,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.094395
                ],
                [
                    7.672086,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21714,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.09889
                ],
                [
                    7.672086,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14046,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.103385
                ],
                [
                    7.672086,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17898,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.10788
                ],
                [
                    7.672086,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14866,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.112375
                ],
                [
                    7.672086,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25630,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.11687
                ],
                [
                    7.672086,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20439,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.121365
                ],
                [
                    7.672086,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24172,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.12586
                ],
                [
                    7.672086,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20085,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.130355
                ],
                [
                    7.672086,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19170,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0
                ],
                [
                    7.678444,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25754,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.004495
                ],
                [
                    7.678444,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17565,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.00899
                ],
                [
                    7.678444,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25914,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.013485
                ],
                [
                    7.678444,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13347,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.01798
                ],
                [
                    7.678444,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15119,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.022475
                ],
                [
                    7.678444,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16640,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.02697
                ],
                [
                    7.678444,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17101,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.031465
                ],
                [
                    7.678444,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16148,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.03596
                ],
                [
                    7.678444,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17918,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.040455
                ],
                [
                    7.678444,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20188,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.04495
                ],
                [
                    7.678444,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18864,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
                ],
                [
                    7.678444,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20459,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
                ],
                [
                    7.678444,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22428,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
                ],
                [
                    7.678444,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16716,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
                ],
                [
                    7.678444,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25816,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.067425
                ],
                [
                    7.678444,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22202,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
                ],
                [
                    7.678444,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25586,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
                ],
                [
                    7.678444,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25440,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.08091
                ],
                [
                    7.678444,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20308,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.085405
                ],
                [
                    7.678444,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21511,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
                ],
                [
                    7.678444,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21106,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.094395
                ],
                [
                    7.678444,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16074,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.09889
                ],
                [
                    7.678444,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17806,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.103385
                ],
                [
                    7.678444,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24928,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.10788
                ],
                [
                    7.678444,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17903,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.112375
                ],
                [
                    7.678444,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19381,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.11687
                ],
                [
                    7.678444,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16154,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.121365
                ],
                [
                    7.678444,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21776,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.12586
                ],
                [
                    7.678444,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18467,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.130355
                ],
                [
                    7.678444,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19485,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.0
                ],
                [
                    7.684802,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19320,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.004495
                ],
                [
                    7.684802,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19785,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.00899
                ],
                [
                    7.684802,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19234,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.013485
                ],
                [
                    7.684802,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13214,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.01798
                ],
                [
                    7.684802,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16025,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.022475
                ],
                [
                    7.684802,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23157,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.02697
                ],
                [
                    7.684802,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18671,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.031465
                ],
                [
                    7.684802,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16683,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.03596
                ],
                [
                    7.684802,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24473,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.040455
                ],
                [
                    7.684802,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21751,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.04495
                ],
                [
                    7.684802,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17142,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.049445
                ],
                [
                    7.684802,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24091,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.05394
                ],
                [
                    7.684802,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16895,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
                ],
                [
                    7.684802,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15810,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
                ],
                [
                    7.684802,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21877,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
                ],
                [
                    7.684802,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22438,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.07192
                ],
                [
                    7.684802,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16125,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
                ],
                [
                    7.684802,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14356,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.08091
                ],
                [
                    7.684802,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13397,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.085405
                ],
                [
                    7.684802,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22772,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.0899
                ],
                [
                    7.684802,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24931,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.094395
                ],
                [
                    7.684802,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13851,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.09889
                ],
                [
                    7.684802,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22865,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.103385
                ],
                [
                    7.684802,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18161,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.10788
                ],
                [
                    7.684802,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20965,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.112375
                ],
                [
                    7.684802,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15224,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.11687
                ],
                [
                    7.684802,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20708,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.121365
                ],
                [
                    7.684802,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21253,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.12586
                ],
                [
                    7.684802,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24545,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.130355
                ],
                [
                    7.684802,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19300,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0
                ],
                [
                    7.69116,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19281,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.004495
                ],
                [
                    7.69116,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19487,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.00899
                ],
                [
                    7.69116,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19405,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.013485
                ],
                [
                    7.69116,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19019,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.01798
                ],
                [
                    7.69116,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19642,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.022475
                ],
                [
                    7.69116,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20776,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.02697
                ],
                [
                    7.69116,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25409,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.031465
                ],
                [
                    7.69116,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25019,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.03596
                ],
                [
                    7.69116,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14013,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.040455
                ],
                [
                    7.69116,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14892,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.04495
                ],
                [
                    7.69116,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22081,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.049445
                ],
                [
                    7.69116,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17471,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.05394
                ],
                [
                    7.69116,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14306,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
                ],
                [
                    7.69116,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15006,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
                ],
                [
                    7.69116,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19313,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
                ],
                [
                    7.69116,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16583,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
                ],
                [
                    7.69116,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14905,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.076415
                ],
                [
                    7.69116,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15054,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.08091
                ],
                [
                    7.69116,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18365,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.085405
                ],
                [
                    7.69116,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23838,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0899
                ],
                [
                    7.69116,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25917,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.094395
                ],
                [
                    7.69116,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17077,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.09889
                ],
                [
                    7.69116,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14424,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.103385
                ],
                [
                    7.69116,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13176,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.10788
                ],
                [
                    7.69116,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19055,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.112375
                ],
                [
                    7.69116,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23976,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.11687
                ],
                [
                    7.69116,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14654,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.121365
                ],
                [
                    7.69116,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13111,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.12586
                ],
                [
                    7.69116,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15404,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.130355
                ],
                [
                    7.69116,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19240,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.0
                ],
                [
                    7.697518,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19115,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.004495
                ],
                [
                    7.697518,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19829,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.00899
                ],
                [
                    7.697518,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19322,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.013485
                ],
                [
                    7.697518,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19858,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.01798
                ],
                [
                    7.697518,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19648,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.022475
                ],
                [
                    7.697518,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19407,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.02697
                ],
                [
                    7.697518,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19229,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.031465
                ],
                [
                    7.697518,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19052,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.03596
                ],
                [
                    7.697518,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23812,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.040455
                ],
                [
                    7.697518,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17003,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.04495
                ],
                [
                    7.697518,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25322,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.049445
                ],
                [
                    7.697518,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21802,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.05394
                ],
                [
                    7.697518,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24896,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
                ],
                [
                    7.697518,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19299,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.06293
                ],
                [
                    7.697518,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14322,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
                ],
                [
                    7.697518,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23926,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.07192
                ],
                [
                    7.697518,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16949,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.076415
                ],
                [
                    7.697518,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17691,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.08091
                ],
                [
                    7.697518,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23084,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.085405
                ],
                [
                    7.697518,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21372,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.0899
                ],
                [
                    7.697518,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20865,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.094395
                ],
                [
                    7.697518,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13867,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.09889
                ],
                [
                    7.697518,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19081,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.103385
                ],
                [
                    7.697518,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18668,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.10788
                ],
                [
                    7.697518,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20560,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.112375
                ],
                [
                    7.697518,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21846,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.11687
                ],
                [
                    7.697518,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17490,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.121365
                ],
                [
                    7.697518,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16151,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.12586
                ],
                [
                    7.697518,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18792,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.130355
                ],
                [
                    7.697518,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19731,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.0
                ],
                [
                    7.703876,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19904,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.004495
                ],
                [
                    7.703876,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19704,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.00899
                ],
                [
                    7.703876,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19079,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.013485
                ],
                [
                    7.703876,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19607,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.01798
                ],
                [
                    7.703876,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19535,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.022475
                ],
                [
                    7.703876,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19598,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.02697
                ],
                [
                    7.703876,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19679,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.031465
                ],
                [
                    7.703876,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19308,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.03596
                ],
                [
                    7.703876,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19697,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.040455
                ],
                [
                    7.703876,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19790,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.04495
                ],
                [
                    7.703876,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 15181,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.049445
                ],
                [
                    7.703876,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17815,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.05394
                ],
                [
                    7.703876,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22943,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
                ],
                [
                    7.703876,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24680,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.06293
                ],
                [
                    7.703876,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17977,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.067425
                ],
                [
                    7.703876,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16187,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.07192
                ],
                [
                    7.703876,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22326,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.076415
                ],
                [
                    7.703876,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21299,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.08091
                ],
                [
                    7.703876,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22806,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.085405
                ],
                [
                    7.703876,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16527,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.0899
                ],
                [
                    7.703876,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25535,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.094395
                ],
                [
                    7.703876,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16178,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.09889
                ],
                [
                    7.703876,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21102,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.103385
                ],
                [
                    7.703876,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19808,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.10788
                ],
                [
                    7.703876,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23587,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.112375
                ],
                [
                    7.703876,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 20505,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.11687
                ],
                [
                    7.703876,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17046,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.121365
                ],
                [
                    7.703876,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16102,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.12586
                ],
                [
                    7.703876,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18936,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.130355
                ],
                [
                    7.703876,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19372,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.0
                ],
                [
                    7.710234,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19757,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.004495
                ],
                [
                    7.710234,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19633,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.00899
                ],
                [
                    7.710234,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19897,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.013485
                ],
                [
                    7.710234,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19553,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.01798
                ],
                [
                    7.710234,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19203,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.022475
                ],
                [
                    7.710234,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19801,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.02697
                ],
                [
                    7.710234,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19155,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.031465
                ],
                [
                    7.710234,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19647,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.03596
                ],
                [
                    7.710234,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19917,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.040455
                ],
                [
                    7.710234,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19725,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.04495
                ],
                [
                    7.710234,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19019,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.049445
                ],
                [
                    7.710234,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19551,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.05394
                ],
                [
                    7.710234,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19413,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.058435
                ],
                [
                    7.710234,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23250,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.06293
                ],
                [
                    7.710234,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19329,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.067425
                ],
                [
                    7.710234,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25218,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.07192
                ],
                [
                    7.710234,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25136,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.076415
                ],
                [
                    7.710234,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13096,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.08091
                ],
                [
                    7.710234,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17962,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.085405
                ],
                [
                    7.710234,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17865,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.0899
                ],
                [
                    7.710234,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17115,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.094395
                ],
                [
                    7.710234,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25522,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.09889
                ],
                [
                    7.710234,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24169,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.103385
                ],
                [
                    7.710234,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25877,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.10788
                ],
                [
                    7.710234,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17281,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.112375
                ],
                [
                    7.710234,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14971,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.11687
                ],
                [
                    7.710234,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24211,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.121365
                ],
                [
                    7.710234,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18767,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.12586
                ],
                [
                    7.710234,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18972,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.130355
                ],
                [
                    7.710234,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19067,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.0
                ],
                [
                    7.716592,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19211,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.004495
                ],
                [
                    7.716592,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19348,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.00899
                ],
                [
                    7.716592,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19487,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.013485
                ],
                [
                    7.716592,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19790,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.01798
                ],
                [
                    7.716592,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19011,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.022475
                ],
                [
                    7.716592,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19256,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.02697
                ],
                [
                    7.716592,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19117,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.031465
                ],
                [
                    7.716592,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19502,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.03596
                ],
                [
                    7.716592,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19498,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.040455
                ],
                [
                    7.716592,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19843,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.04495
                ],
                [
                    7.716592,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19161,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.049445
                ],
                [
                    7.716592,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19435,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.05394
                ],
                [
                    7.716592,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19649,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.058435
                ],
                [
                    7.716592,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19734,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.06293
                ],
                [
                    7.716592,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19263,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.067425
                ],
                [
                    7.716592,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 22831,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.07192
                ],
                [
                    7.716592,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18139,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.076415
                ],
                [
                    7.716592,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13466,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.08091
                ],
                [
                    7.716592,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23467,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.085405
                ],
                [
                    7.716592,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14689,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.0899
                ],
                [
                    7.716592,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21247,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.094395
                ],
                [
                    7.716592,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19808,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.09889
                ],
                [
                    7.716592,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21892,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.103385
                ],
                [
                    7.716592,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14510,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.10788
                ],
                [
                    7.716592,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 23471,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.112375
                ],
                [
                    7.716592,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 24083,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.11687
                ],
                [
                    7.716592,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18704,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.121365
                ],
                [
                    7.716592,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19326,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.12586
                ],
                [
                    7.716592,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18854,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.130355
                ],
                [
                    7.716592,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19646,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.0
                ],
                [
                    7.72295,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19690,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.004495
                ],
                [
                    7.72295,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19487,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.00899
                ],
                [
                    7.72295,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19311,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.013485
                ],
                [
                    7.72295,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19364,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.01798
                ],
                [
                    7.72295,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19134,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.022475
                ],
                [
                    7.72295,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19134,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.02697
                ],
                [
                    7.72295,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19604,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.031465
                ],
                [
                    7.72295,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19815,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.03596
                ],
                [
                    7.72295,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19798,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.040455
                ],
                [
                    7.72295,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19393,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.04495
                ],
                [
                    7.72295,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19427,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.049445
                ],
                [
                    7.72295,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19780,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.05394
                ],
                [
                    7.72295,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19508,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.058435
                ],
                [
                    7.72295,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19760,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.06293
                ],
                [
                    7.72295,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19065,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.067425
                ],
                [
                    7.72295,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19434,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.07192
                ],
                [
                    7.72295,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19138,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.076415
                ],
                [
                    7.72295,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19390,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.08091
                ],
                [
                    7.72295,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19240,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.085405
                ],
                [
                    7.72295,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 17461,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.0899
                ],
                [
                    7.72295,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13262,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.094395
                ],
                [
                    7.72295,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 16472,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.09889
                ],
                [
                    7.72295,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 21283,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.103385
                ],
                [
                    7.72295,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14143,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.10788
                ],
                [
                    7.72295,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 14630,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.112375
                ],
                [
                    7.72295,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18645,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.11687
                ],
                [
                    7.72295,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19333,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.121365
                ],
                [
                    7.72295,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18580,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.12586
                ],
                [
                    7.72295,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19248,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.130355
                ],
                [
                    7.72295,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19198,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.0
                ],
                [
                    7.729308,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19161,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.004495
                ],
                [
                    7.729308,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19352,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.00899
                ],
                [
                    7.729308,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19776,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.013485
                ],
                [
                    7.729308,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19721,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.01798
                ],
                [
                    7.729308,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19501,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.022475
                ],
                [
                    7.729308,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19489,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.02697
                ],
                [
                    7.729308,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19674,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.031465
                ],
                [
                    7.729308,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19505,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.03596
                ],
                [
                    7.729308,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19249,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.040455
                ],
                [
                    7.729308,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19486,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.04495
                ],
                [
                    7.729308,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19242,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.049445
                ],
                [
                    7.729308,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19479,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.05394
                ],
                [
                    7.729308,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19400,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.058435
                ],
                [
                    7.729308,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19366,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.06293
                ],
                [
                    7.729308,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19141,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.067425
                ],
                [
                    7.729308,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19427,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.07192
                ],
                [
                    7.729308,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19118,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.076415
                ],
                [
                    7.729308,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19350,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.08091
                ],
                [
                    7.729308,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19867,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.085405
                ],
                [
                    7.729308,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19716,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.0899
                ],
                [
                    7.729308,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19469,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.094395
                ],
                [
                    7.729308,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 25880,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.09889
                ],
                [
                    7.729308,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 13556,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.103385
                ],
                [
                    7.729308,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 12988,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.10788
                ],
                [
                    7.729308,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18719,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.112375
                ],
                [
                    7.729308,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18694,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.11687
                ],
                [
                    7.729308,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19089,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.121365
                ],
                [
                    7.729308,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19295,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.12586
                ],
                [
                    7.729308,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18723,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.729308,
                    45.130355
                ],
                [
                    7.729308,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19062,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.0
                ],
                [
                    7.735666,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19880,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.004495
                ],
                [
                    7.735666,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19516,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.00899
                ],
                [
                    7.735666,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19501,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.013485
                ],
                [
                    7.735666,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19372,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.01798
                ],
                [
                    7.735666,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19860,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.022475
                ],
                [
                    7.735666,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19897,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.02697
                ],
                [
                    7.735666,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19335,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.031465
                ],
                [
                    7.735666,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19655,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.03596
                ],
                [
                    7.735666,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19090,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.040455
                ],
                [
                    7.735666,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19084,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.04495
                ],
                [
                    7.735666,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19375,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.049445
                ],
                [
                    7.735666,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19234,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.05394
                ],
                [
                    7.735666,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19228,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.058435
                ],
                [
                    7.735666,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19726,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.06293
                ],
                [
                    7.735666,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19080,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.067425
                ],
                [
                    7.735666,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19303,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.07192
                ],
                [
                    7.735666,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19896,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.076415
                ],
                [
                    7.735666,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19126,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.08091
                ],
                [
                    7.735666,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19368,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.085405
                ],
                [
                    7.735666,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19540,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.0899
                ],
                [
                    7.735666,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19052,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.094395
                ],
                [
                    7.735666,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19049,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.09889
                ],
                [
                    7.735666,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19868,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.103385
                ],
                [
                    7.735666,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19118,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.10788
                ],
                [
                    7.735666,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19093,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.112375
                ],
                [
                    7.735666,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19277,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.11687
                ],
                [
                    7.735666,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18747,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.121365
                ],
                [
                    7.735666,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19157,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.12586
                ],
                [
                    7.735666,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19072,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.735666,
                    45.130355
                ],
                [
                    7.735666,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19711,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.0
                ],
                [
                    7.742024,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19417,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.004495
                ],
                [
                    7.742024,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19968,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.00899
                ],
                [
                    7.742024,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19168,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.013485
                ],
                [
                    7.742024,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19501,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.01798
                ],
                [
                    7.742024,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19151,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.022475
                ],
                [
                    7.742024,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19721,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.02697
                ],
                [
                    7.742024,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19673,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.031465
                ],
                [
                    7.742024,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19606,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.03596
                ],
                [
                    7.742024,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19360,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.040455
                ],
                [
                    7.742024,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19018,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.04495
                ],
                [
                    7.742024,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19160,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.049445
                ],
                [
                    7.742024,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19551,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.05394
                ],
                [
                    7.742024,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19445,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.058435
                ],
                [
                    7.742024,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19260,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.06293
                ],
                [
                    7.742024,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19895,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.067425
                ],
                [
                    7.742024,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19219,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.07192
                ],
                [
                    7.742024,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19524,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.076415
                ],
                [
                    7.742024,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19779,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.08091
                ],
                [
                    7.742024,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19036,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.085405
                ],
                [
                    7.742024,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19558,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.0899
                ],
                [
                    7.742024,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19172,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.094395
                ],
                [
                    7.742024,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19671,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.09889
                ],
                [
                    7.742024,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19798,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.103385
                ],
                [
                    7.742024,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19971,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.10788
                ],
                [
                    7.742024,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19113,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.112375
                ],
                [
                    7.742024,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18580,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.11687
                ],
                [
                    7.742024,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18683,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.121365
                ],
                [
                    7.742024,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19453,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.12586
                ],
                [
                    7.742024,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18981,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.742024,
                    45.130355
                ],
                [
                    7.742024,
                    45.130355
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19874,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.0
                ],
                [
                    7.748382,
                    45.0
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19516,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.004495
                ],
                [
                    7.748382,
                    45.004495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19970,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.00899
                ],
                [
                    7.748382,
                    45.00899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19069,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.013485
                ],
                [
                    7.748382,
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19095,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.01798
                ],
                [
                    7.748382,
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19076,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.022475
                ],
                [
                    7.748382,
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19403,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.02697
                ],
                [
                    7.748382,
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19636,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.031465
                ],
                [
                    7.748382,
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19599,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.03596
                ],
                [
                    7.748382,
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19393,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.040455
                ],
                [
                    7.748382,
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19598,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.04495
                ],
                [
                    7.748382,
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19131,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.049445
                ],
                [
                    7.748382,
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19286,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.05394
                ],
                [
                    7.748382,
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19579,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.058435
                ],
                [
                    7.748382,
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19035,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.06293
                ],
                [
                    7.748382,
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19320,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.067425
                ],
                [
                    7.748382,
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19492,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.07192
                ],
                [
                    7.748382,
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19057,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.076415
                ],
                [
                    7.748382,
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19042,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.08091
                ],
                [
                    7.748382,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19731,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.085405
                ],
                [
                    7.748382,
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19818,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.0899
                ],
                [
                    7.748382,
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19621,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.094395
                ],
                [
                    7.748382,
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19959,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.09889
                ],
                [
                    7.748382,
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19067,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.103385
                ],
                [
                    7.748382,
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19312,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.10788
                ],
                [
                    7.748382,
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19353,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.112375
                ],
                [
                    7.748382,
                    45.112375
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19074,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.11687
                ],
                [
                    7.748382,
                    45.11687
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19096,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.121365
                ],
                [
                    7.748382,
                    45.121365
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 19050,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.12586
                ],
                [
                    7.748382,
                    45.12586
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 18838,
            "maxload": 38934
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.748382,
                    45.130355
                ],
                [
                    7.748382,
                    45.130355
                ]
            ]
        }
    }
];


//https://gka.github.io/palettes/#/100|d|00429d,96ffea,fbff7c|f9fb82,f72760,cc0000|1|1

var array = ['#00429d', '#08459d', '#0f499e', '#154c9e', '#1a4f9f', '#1e539f', '#2256a0', '#2559a0', '#285ca0', '#2c60a0', '#2f63a0', '#3266a1', '#356aa1', '#376da1', '#3a70a1', '#3d74a1', '#4077a1', '#437aa1', '#457ea0', '#4881a0', '#4b84a0', '#4e889f', '#518b9f', '#548e9f', '#57919e', '#5a959d', '#5d989d', '#619b9c', '#649f9b', '#67a29a', '#6ba599', '#6ea898', '#72ac96', '#76af95', '#7ab294', '#7eb592', '#82b890', '#87bb8e', '#8bbf8c', '#90c289', '#95c587', '#9ac884', '#a0cb81', '#a5cd7d', '#abd07a', '#b2d375', '#b9d570', '#c0d86b', '#c8da65', '#d0dc5d', '#dcd958', '#ded559', '#dfd259', '#e1ce59', '#e2ca5a', '#e3c65a', '#e4c35a', '#e5bf5a', '#e6bb5a', '#e7b75a', '#e8b35a', '#e9af5a', '#eaac59', '#eaa859', '#eba459', '#eba058', '#ec9c58', '#ec9857', '#ec9456', '#ed9056', '#ed8c55', '#ed8854', '#ed8453', '#ed8052', '#ed7c51', '#ed7850', '#ec744f', '#ec6f4d', '#ec6b4c', '#eb674a', '#eb6349', '#ea5e47', '#e95a45', '#e95643', '#e85141', '#e74c3f', '#e6483c', '#e5433a', '#e33e37', '#e23934', '#e13431', '#df2f2e', '#dd2a2b', '#db2427', '#d91f23', '#d7191e', '#d51219', '#d20b12', '#cf040a', '#cc0000','#510000'];
console.log(array.length);

function onEachFeature(feature, layer) {
		var popupContent = "<p>The load is 0 </p> ";
}


L.geoJSON(lines, {
  onEachFeature: onEachFeature,
    style: function(feature) {
      var percent = Math.round(feature.properties.load/feature.properties.maxload*100);
      console.log(percent);
      if (percent > 99) {
        percent = 100;
				console.log(percent);
      }
      return {color: array[percent], weight: percent/4.55, opacity:0.85}
    }
}).addTo(map);

}
