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
            "load": 1,
            "maxload": 962,
            "color": "#ccff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffb700"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.602148,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.01798
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
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
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
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
            "load": 5,
            "maxload": 962,
            "color": "#00c080"
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
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
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#1710f7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.07192
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
            "load": 4,
            "maxload": 962,
            "color": "#ffed00"
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
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
            "load": 2,
            "maxload": 962,
            "color": "#ee82ee"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.067425
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
            "load": 2,
            "maxload": 962,
            "color": "#00ffff"
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#0033ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#0066ff"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.02697
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.07192
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
            "load": 2,
            "maxload": 962,
            "color": "#990000"
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
            "load": 4,
            "maxload": 962,
            "color": "#00cc99"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.022475
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
            "load": 2,
            "maxload": 962,
            "color": "#8d0000"
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#ffd200"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6cc"
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
                    45.10788
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 962,
            "color": "#ff4200"
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 962,
            "color": "#00e600"
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#8053d8"
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#8d0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.085405
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
            "load": 4,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.05394
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
            "load": 4,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#80ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.02697
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6cc"
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.058435
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
            "load": 3,
            "maxload": 962,
            "color": "#0000ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 2,
            "maxload": 962,
            "color": "#d90000"
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.10788
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
            "load": 1,
            "maxload": 962,
            "color": "#ffa500"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 3,
            "maxload": 962,
            "color": "#99ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 4,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 4,
            "maxload": 962,
            "color": "#bd6de4"
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 4,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 2,
            "maxload": 962,
            "color": "#ffa500"
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
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
            "load": 3,
            "maxload": 962,
            "color": "#0c08fb"
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 2,
            "maxload": 962,
            "color": "#00c080"
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.067425
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
            "load": 2,
            "maxload": 962,
            "color": "#ffd200"
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#1710f7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 2,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#80ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 4,
            "maxload": 962,
            "color": "#2317f3"
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
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
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#ffed00"
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
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#ffb700"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#f20000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.01798
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
            "load": 1,
            "maxload": 962,
            "color": "#8d0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
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
            "load": 1,
            "maxload": 962,
            "color": "#ccff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 5,
            "maxload": 962,
            "color": "#008d19"
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
            "load": 1,
            "maxload": 962,
            "color": "#cd5bcd"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
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
            "load": 3,
            "maxload": 962,
            "color": "#b30000"
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
            "load": 2,
            "maxload": 962,
            "color": "#b2ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "load": 2,
            "maxload": 962,
            "color": "#6846da"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.04495
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
            "load": 2,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 2,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
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
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
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
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#cd5bcd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.03596
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
            "load": 2,
            "maxload": 962,
            "color": "#ff8400"
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#008d19"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.049445
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
            "load": 4,
            "maxload": 962,
            "color": "#961a96"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 962,
            "color": "#b168e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.00899
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.085405
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
            "load": 2,
            "maxload": 962,
            "color": "#5d3ede"
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
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0033ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 5,
            "maxload": 962,
            "color": "#1710f7"
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.08091
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
            "load": 2,
            "maxload": 962,
            "color": "#ff5200"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 2,
            "maxload": 962,
            "color": "#961a96"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#b741b7"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.094395
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
            "load": 2,
            "maxload": 962,
            "color": "#ffdb00"
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
            "load": 3,
            "maxload": 962,
            "color": "#1710f7"
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
            "load": 2,
            "maxload": 962,
            "color": "#8053d8"
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
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
            "load": 2,
            "maxload": 962,
            "color": "#b741b7"
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
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
            "load": 1,
            "maxload": 962,
            "color": "#1710f7"
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.076415
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
            "load": 2,
            "maxload": 962,
            "color": "#00b366"
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
            "load": 3,
            "maxload": 962,
            "color": "#00ccff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.03596
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
            "load": 2,
            "maxload": 962,
            "color": "#c24ec2"
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#cd5bcd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
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
            "load": 2,
            "maxload": 962,
            "color": "#ffc000"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffa500"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.013485
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
            "load": 2,
            "maxload": 962,
            "color": "#00ccff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.07192
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
            "load": 2,
            "maxload": 962,
            "color": "#ffae00"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6cc"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
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
            "load": 2,
            "maxload": 962,
            "color": "#ff5200"
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#b168e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
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
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.03596
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
            "load": 4,
            "maxload": 962,
            "color": "#00d900"
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
            "load": 1,
            "maxload": 962,
            "color": "#b741b7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.103385
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
            "load": 2,
            "maxload": 962,
            "color": "#0033ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#4dff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ffed00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 2,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.10788
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
            "load": 3,
            "maxload": 962,
            "color": "#d868d8"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff3200"
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
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffed00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#d678e9"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#d678e9"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffb700"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ff3200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 3,
            "maxload": 962,
            "color": "#e27dec"
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ccff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.09889
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
            "load": 2,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6cc"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ffed00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 2,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
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
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#4dff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.06293
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
            "load": 7,
            "maxload": 962,
            "color": "#a127a1"
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 2,
            "maxload": 962,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.103385
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
            "load": 2,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
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
            "load": 3,
            "maxload": 962,
            "color": "#c00000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "load": 1,
            "maxload": 962,
            "color": "#b168e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff3200"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 2,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.040455
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
            "load": 2,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#80ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 7,
            "maxload": 962,
            "color": "#008d00"
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
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
            "load": 2,
            "maxload": 962,
            "color": "#e60000"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffed00"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#8d0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 2,
            "maxload": 962,
            "color": "#961a96"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
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
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#b168e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.04495
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
            "load": 2,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.022475
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
            "load": 4,
            "maxload": 962,
            "color": "#ffc900"
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
            "load": 7,
            "maxload": 962,
            "color": "#ffae00"
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
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#ff2100"
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
            "load": 2,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.05394
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
            "load": 3,
            "maxload": 962,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 2,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.01798
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
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
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
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
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 3,
            "maxload": 962,
            "color": "#00cc00"
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffae00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#8d0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 3,
            "maxload": 962,
            "color": "#ff1000"
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
            "load": 3,
            "maxload": 962,
            "color": "#ccff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#1710f7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#6846da"
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#00c080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
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
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
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
            "load": 2,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#ffa500"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "load": 2,
            "maxload": 962,
            "color": "#cd5bcd"
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 2,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.040455
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
            "load": 3,
            "maxload": 962,
            "color": "#00ffff"
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
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
            "load": 3,
            "maxload": 962,
            "color": "#ffd200"
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
            "load": 5,
            "maxload": 962,
            "color": "#ffc900"
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 7,
            "maxload": 962,
            "color": "#b30000"
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ffb700"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0066ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
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
                    45.02697
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0066ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.10788
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.085405
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
            "load": 3,
            "maxload": 962,
            "color": "#800080"
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
            "load": 1,
            "maxload": 962,
            "color": "#80ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#33ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
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
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#80ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#cd5bcd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
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
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.01798
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 2,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff1000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#2e1fef"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#0033ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 7,
            "maxload": 962,
            "color": "#00ccff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
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
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
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
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 5,
            "maxload": 962,
            "color": "#00c000"
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffb700"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.01798
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0066ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.067425
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
            "load": 2,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 5,
            "maxload": 962,
            "color": "#80ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 3,
            "maxload": 962,
            "color": "#0000ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.03596
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
            "load": 3,
            "maxload": 962,
            "color": "#008d00"
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.076415
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
            "load": 4,
            "maxload": 962,
            "color": "#cd5bcd"
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
            "load": 4,
            "maxload": 962,
            "color": "#66ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#4dff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.04495
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
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
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 7,
            "maxload": 962,
            "color": "#c00000"
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#80ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.02697
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
            "load": 2,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
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
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00e6ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#b168e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.72295,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
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
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 4,
            "maxload": 962,
            "color": "#00d900"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.040455
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
            "load": 2,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00c000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#c00000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#e375e3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
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
            "load": 7,
            "maxload": 962,
            "color": "#ff1000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.05394
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
            "load": 3,
            "maxload": 962,
            "color": "#004cff"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.03596
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
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00ccff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#452fe6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.08091
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
            "load": 2,
            "maxload": 962,
            "color": "#001aff"
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
            "load": 2,
            "maxload": 962,
            "color": "#e27dec"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
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
            "load": 2,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.058435
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
            "load": 2,
            "maxload": 962,
            "color": "#ffa500"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 2,
            "maxload": 962,
            "color": "#00e6cc"
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff2100"
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
            "load": 2,
            "maxload": 962,
            "color": "#008d19"
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#b2ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00e6cc"
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
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.022475
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
            "load": 1,
            "maxload": 962,
            "color": "#a127a1"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#ffd200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
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
            "load": 5,
            "maxload": 962,
            "color": "#8c58db"
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
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#ee82ee"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#004cff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "load": 2,
            "maxload": 962,
            "color": "#800080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c24ec2"
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
            "load": 1,
            "maxload": 962,
            "color": "#cd5bcd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00f200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 2,
            "maxload": 962,
            "color": "#1710f7"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#ff7400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#961a96"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
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
            "load": 1,
            "maxload": 962,
            "color": "#b30000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#8053d8"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#985edd"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0c08fb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00b3ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.03596
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
            "load": 3,
            "maxload": 962,
            "color": "#00a600"
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#f20000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.076415
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
            "load": 5,
            "maxload": 962,
            "color": "#00d900"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff3200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 962,
            "color": "#5137e2"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#990000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.094395
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#800080"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.022475
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
            "load": 2,
            "maxload": 962,
            "color": "#ffdb00"
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
            "load": 1,
            "maxload": 962,
            "color": "#ff3200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#1aff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "load": 1,
            "maxload": 962,
            "color": "#bd6de4"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0066ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#ffa500"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#a563e0"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#4dff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00e600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#a60000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#009900"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.08091
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
            "load": 3,
            "maxload": 962,
            "color": "#ffdb00"
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
            "load": 1,
            "maxload": 962,
            "color": "#3a27eb"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.09889
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
            "load": 1,
            "maxload": 962,
            "color": "#ac34ac"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#d678e9"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.049445
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
            "load": 1,
            "maxload": 962,
            "color": "#00d9b3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 962,
            "color": "#66ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#0099ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#0000ff"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
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
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ffa500"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 2,
            "maxload": 962,
            "color": "#0c08fb"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#0033ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 2,
            "maxload": 962,
            "color": "#ffc000"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#0033ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.10788
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
            "load": 1,
            "maxload": 962,
            "color": "#ffc000"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#e6ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#d868d8"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#8d0000"
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
            "load": 1,
            "maxload": 962,
            "color": "#00d900"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#800080"
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
            "load": 1,
            "maxload": 962,
            "color": "#008d19"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ffe400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.103385
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
            "load": 1,
            "maxload": 962,
            "color": "#d90000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#fff600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.067425
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
            "load": 3,
            "maxload": 962,
            "color": "#ffc000"
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
            "load": 2,
            "maxload": 962,
            "color": "#c00000"
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
            "load": 1,
            "maxload": 962,
            "color": "#8c58db"
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
            "load": 4,
            "maxload": 962,
            "color": "#961a96"
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
            "load": 2,
            "maxload": 962,
            "color": "#8053d8"
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
            "load": 3,
            "maxload": 962,
            "color": "#00b300"
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
            "load": 1,
            "maxload": 962,
            "color": "#009933"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.022475
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
            "load": 2,
            "maxload": 962,
            "color": "#66ff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#744ed6"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#cc0000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.049445
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
            "load": 2,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
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
            "load": 1,
            "maxload": 962,
            "color": "#008d00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.049445
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
            "load": 3,
            "maxload": 962,
            "color": "#ffae00"
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
            "load": 4,
            "maxload": 962,
            "color": "#1aff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#e27dec"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.08091
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
            "load": 1,
            "maxload": 962,
            "color": "#ff4200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.076415
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
            "load": 1,
            "maxload": 962,
            "color": "#00b300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#e60000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.608506,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#d678e9"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.085405
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
            "load": 1,
            "maxload": 962,
            "color": "#00a64d"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.05394
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
            "load": 1,
            "maxload": 962,
            "color": "#4dff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ff9400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#ffff00"
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
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 962,
            "color": "#c972e7"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.013485
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
            "load": 1,
            "maxload": 962,
            "color": "#8b0d8b"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.06293
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
            "load": 2,
            "maxload": 962,
            "color": "#c00000"
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
            "load": 1,
            "maxload": 962,
            "color": "#99ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#001aff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.058435
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
            "load": 3,
            "maxload": 962,
            "color": "#0080ff"
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
            "load": 1,
            "maxload": 962,
            "color": "#5d3ede"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.0899
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
            "load": 1,
            "maxload": 962,
            "color": "#ff8400"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#00cc99"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 962,
            "color": "#00ffff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#00b366"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
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
            "load": 2,
            "maxload": 962,
            "color": "#ffc000"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "load": 5,
            "maxload": 962,
            "color": "#ffdb00"
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
            "load": 1,
            "maxload": 962,
            "color": "#00a600"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.07192
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
            "load": 1,
            "maxload": 962,
            "color": "#00ff00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.058435
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
            "load": 1,
            "maxload": 962,
            "color": "#2317f3"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff6300"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.049445
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
            "load": 3,
            "maxload": 962,
            "color": "#ccff00"
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
            "load": 1,
            "maxload": 962,
            "color": "#0080ff"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.067425
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
            "load": 3,
            "maxload": 962,
            "color": "#00cc99"
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
            "load": 1,
            "maxload": 962,
            "color": "#00f2e5"
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
            "load": 1,
            "maxload": 962,
            "color": "#ffdb00"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "load": 1,
            "maxload": 962,
            "color": "#ff5200"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.06293
                ],
                [
                    7.665728,
                    45.03596
                ]
            ]
        }
    }
];

//https://gka.github.io/palettes/#/100|d|00429d,96ffea,fbff7c|f9fb82,f72760,cc0000|1|1

L.geoJSON(lines,{
	style(feature){
		return {weight:(feature.properties.load/feature.properties.maxload*400)+5 , opacity:0.5}
	}
}
).addTo(map);
lines.forEach(function(lines) {

    var latLng = [new L.LatLng(lines.geometry.coordinates[0][1], lines.geometry.coordinates[0][0]),
                  new L.LatLng(lines.geometry.coordinates[1][1], lines.geometry.coordinates[1][0])];
    var polyline = L.polyline(latLng, {color: "white",fillOpacity: 0.3, weight: 0.8}).addTo(map);
    //console.log(lines.geometry.coordinates[0]);
    console.log(polyline);
    //console.log(latLng)
	var multiCoords1 = [
        polyline
    ];
    var plArray = [];
    for(var i=0; i<multiCoords1.length; i++) {
        plArray.push(L.polyline(multiCoords1[i]).addTo(map));
    }
    L.polylineDecorator(multiCoords1, {
        patterns: [
            {offset: 35, repeat: 45, symbol: L.Symbol.arrowHead({pixelSize: 1, pathOptions: {fillOpacity: 1, weight: 0}})}
        ]
    }).addTo(map);


});

}
