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
            "maxload": 427,
            "color": "#ebfd83"
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
            "load": 1,
            "maxload": 427,
            "color": "#ebfd83"
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
            "load": 1,
            "maxload": 427,
            "color": "#d7171c"
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
            "load": 1,
            "maxload": 427,
            "color": "#d7171c"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 1,
            "maxload": 427,
            "color": "#bdfa89"
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
            "maxload": 427,
            "color": "#bdfa89"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#edfd83"
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
            "load": 1,
            "maxload": 427,
            "color": "#edfd83"
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
            "load": 3,
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 3,
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 1,
            "maxload": 427,
            "color": "#cefb89"
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
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#fecb77"
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
            "load": 1,
            "maxload": 427,
            "color": "#fecb77"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb972"
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
            "maxload": 427,
            "color": "#feb972"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 1,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 2,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 1,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#82fb7e"
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
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 2,
            "maxload": 427,
            "color": "#49fe6e"
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
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#ef5c4b"
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
            "maxload": 427,
            "color": "#ef5c4b"
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
            "load": 1,
            "maxload": 427,
            "color": "#eb4d42"
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
            "maxload": 427,
            "color": "#eb4d42"
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
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 1,
            "maxload": 427,
            "color": "#fb9565"
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
            "maxload": 427,
            "color": "#fb9565"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 1,
            "maxload": 427,
            "color": "#6cfc78"
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
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 1,
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7fc85"
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
            "maxload": 427,
            "color": "#fde17d"
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
            "maxload": 427,
            "color": "#fde17d"
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
            "maxload": 427,
            "color": "#fec274"
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
            "maxload": 427,
            "color": "#fec274"
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
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 1,
            "maxload": 427,
            "color": "#d0060c"
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
            "maxload": 427,
            "color": "#d30f15"
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
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 3,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 3,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#faf781"
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
            "load": 2,
            "maxload": 427,
            "color": "#faf781"
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
            "load": 2,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 2,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 1,
            "maxload": 427,
            "color": "#eb4d42"
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
            "maxload": 427,
            "color": "#eb4d42"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb570"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb570"
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
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda36a"
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
            "maxload": 427,
            "color": "#74fc7a"
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
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 3,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 3,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 1,
            "maxload": 427,
            "color": "#6cfc78"
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
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 1,
            "maxload": 427,
            "color": "#93fb82"
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
            "load": 1,
            "maxload": 427,
            "color": "#93fb82"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#ebfd83"
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
            "maxload": 427,
            "color": "#ebfd83"
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
            "maxload": 427,
            "color": "#fddc7b"
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
            "maxload": 427,
            "color": "#fddc7b"
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
            "load": 1,
            "maxload": 427,
            "color": "#49fe6e"
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
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 4,
            "maxload": 427,
            "color": "#e7fc85"
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
            "load": 4,
            "maxload": 427,
            "color": "#e7fc85"
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
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 1,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 1,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 1,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 2,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 2,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#effd82"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#fbf280"
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
            "maxload": 427,
            "color": "#fbf280"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#c0fa89"
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
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#a1fb85"
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
            "load": 2,
            "maxload": 427,
            "color": "#a1fb85"
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
            "maxload": 427,
            "color": "#effd82"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "maxload": 427,
            "color": "#fce97f"
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
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 6,
            "maxload": 427,
            "color": "#58fd72"
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
            "load": 6,
            "maxload": 427,
            "color": "#58fd72"
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
            "load": 1,
            "maxload": 427,
            "color": "#d0fb89"
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
            "maxload": 427,
            "color": "#d0fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 2,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 3,
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 3,
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 1,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 4,
            "maxload": 427,
            "color": "#ebfd83"
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
            "load": 4,
            "maxload": 427,
            "color": "#ebfd83"
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
            "load": 1,
            "maxload": 427,
            "color": "#a1fb85"
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
            "load": 1,
            "maxload": 427,
            "color": "#a1fb85"
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
            "load": 1,
            "maxload": 427,
            "color": "#d0060c"
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
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 1,
            "maxload": 427,
            "color": "#faf781"
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
            "load": 1,
            "maxload": 427,
            "color": "#faf781"
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
            "maxload": 427,
            "color": "#e0fc86"
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
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "maxload": 427,
            "color": "#89fb80"
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
            "maxload": 427,
            "color": "#89fb80"
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
            "load": 6,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 6,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 9,
            "maxload": 427,
            "color": "#ec5245"
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
            "load": 9,
            "maxload": 427,
            "color": "#ec5245"
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
            "load": 3,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 2,
            "maxload": 427,
            "color": "#c8fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#c8fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 4,
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 4,
            "maxload": 427,
            "color": "#d0060c"
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
            "load": 2,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 2,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 4,
            "maxload": 427,
            "color": "#e9fd84"
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
            "load": 4,
            "maxload": 427,
            "color": "#e9fd84"
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
            "load": 2,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 2,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 3,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 2,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 4,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 2,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 2,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 2,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#dafb88"
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
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 4,
            "maxload": 427,
            "color": "#e33734"
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
            "load": 4,
            "maxload": 427,
            "color": "#e33734"
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
            "load": 2,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 2,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 4,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 4,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 3,
            "maxload": 427,
            "color": "#b0fa88"
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
            "load": 3,
            "maxload": 427,
            "color": "#b0fa88"
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
            "load": 2,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 2,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 3,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 3,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 2,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 2,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 6,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 6,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb570"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb570"
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
            "maxload": 427,
            "color": "#fec274"
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
            "load": 1,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 1,
            "maxload": 427,
            "color": "#b3fa88"
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
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 2,
            "maxload": 427,
            "color": "#fbf280"
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
            "load": 2,
            "maxload": 427,
            "color": "#fbf280"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 6,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 6,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 4,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#c3fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#b7fa89"
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
            "maxload": 427,
            "color": "#b7fa89"
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
            "load": 6,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 6,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 3,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 2,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 2,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 3,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 3,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 2,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 2,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 5,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 5,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 1,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 1,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#bdfa89"
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
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#c6fb89"
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
            "maxload": 427,
            "color": "#febd73"
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
            "maxload": 427,
            "color": "#febd73"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 4,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 4,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 3,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#e9483f"
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
            "load": 2,
            "maxload": 427,
            "color": "#e9483f"
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
            "load": 6,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 6,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 5,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 5,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 1,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 1,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 3,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 3,
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 3,
            "maxload": 427,
            "color": "#a9fa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 2,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 4,
            "maxload": 427,
            "color": "#fb9565"
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
            "load": 4,
            "maxload": 427,
            "color": "#fb9565"
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
            "load": 4,
            "maxload": 427,
            "color": "#ee5748"
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
            "load": 4,
            "maxload": 427,
            "color": "#ee5748"
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
            "load": 4,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 4,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 2,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 2,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 1,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 1,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 3,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 4,
            "maxload": 427,
            "color": "#fce97f"
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
            "maxload": 427,
            "color": "#fbee7f"
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
            "load": 1,
            "maxload": 427,
            "color": "#fbee7f"
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
            "load": 4,
            "maxload": 427,
            "color": "#f0fe81"
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
            "load": 4,
            "maxload": 427,
            "color": "#f0fe81"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 1,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 4,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 4,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 2,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 2,
            "maxload": 427,
            "color": "#f2fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 3,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 2,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 3,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 3,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8fe7e"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8fe7e"
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
            "load": 1,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 1,
            "maxload": 427,
            "color": "#9cfb85"
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
            "load": 3,
            "maxload": 427,
            "color": "#58fd72"
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
            "load": 3,
            "maxload": 427,
            "color": "#58fd72"
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
            "load": 2,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 1,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 2,
            "maxload": 427,
            "color": "#edfd83"
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
            "maxload": 427,
            "color": "#edfd83"
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
            "load": 4,
            "maxload": 427,
            "color": "#fdac6d"
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
            "load": 4,
            "maxload": 427,
            "color": "#fdac6d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 6,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 6,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 3,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 3,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 3,
            "maxload": 427,
            "color": "#ee5748"
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
            "load": 3,
            "maxload": 427,
            "color": "#ee5748"
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
            "load": 4,
            "maxload": 427,
            "color": "#ef5c4b"
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
            "load": 4,
            "maxload": 427,
            "color": "#ef5c4b"
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
            "load": 3,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 3,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 6,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 6,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 3,
            "maxload": 427,
            "color": "#bafa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#bafa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 2,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 9,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 9,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#f47055"
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
            "load": 2,
            "maxload": 427,
            "color": "#f47055"
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
            "load": 2,
            "maxload": 427,
            "color": "#fb9565"
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
            "load": 2,
            "maxload": 427,
            "color": "#fb9565"
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
            "load": 4,
            "maxload": 427,
            "color": "#f47055"
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
            "load": 4,
            "maxload": 427,
            "color": "#f47055"
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
            "load": 4,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 4,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 4,
            "maxload": 427,
            "color": "#a1fb85"
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
            "load": 4,
            "maxload": 427,
            "color": "#a1fb85"
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
            "load": 3,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 3,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 6,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 6,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 2,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 3,
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 1,
            "maxload": 427,
            "color": "#49fe6e"
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
            "load": 4,
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 4,
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#e13130"
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
            "load": 2,
            "maxload": 427,
            "color": "#e13130"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 3,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 1,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 1,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 9,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 9,
            "maxload": 427,
            "color": "#fed479"
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
            "maxload": 427,
            "color": "#e7fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7fc85"
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
            "load": 3,
            "maxload": 427,
            "color": "#e5fc85"
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
            "load": 3,
            "maxload": 427,
            "color": "#e5fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 1,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 4,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 4,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9875f"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9875f"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 2,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 2,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 2,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 9,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 9,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 4,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 2,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 2,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 1,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 1,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 3,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 3,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 1,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 5,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 5,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 4,
            "maxload": 427,
            "color": "#fdd87a"
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
            "load": 4,
            "maxload": 427,
            "color": "#fdd87a"
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
            "load": 4,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 4,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 4,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 4,
            "maxload": 427,
            "color": "#63fd75"
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
            "load": 4,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 4,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 2,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 2,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#d0fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#d0fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 3,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 3,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 3,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 1,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 1,
            "maxload": 427,
            "color": "#f67959"
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
            "load": 2,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 2,
            "maxload": 427,
            "color": "#f6fe7f"
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
            "load": 2,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#cefb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 4,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 4,
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 6,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 6,
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 3,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 3,
            "maxload": 427,
            "color": "#febd73"
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
            "load": 4,
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 4,
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 1,
            "maxload": 427,
            "color": "#fda76c"
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
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 2,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 2,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 3,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 1,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 1,
            "maxload": 427,
            "color": "#f77e5b"
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
            "load": 2,
            "maxload": 427,
            "color": "#d0fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#d0fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#b7fa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#b7fa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 2,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#f4fe80"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 3,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 4,
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 3,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 3,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#c0fa89"
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
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 2,
            "maxload": 427,
            "color": "#b3fa88"
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
            "load": 5,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 5,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 3,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 3,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 2,
            "maxload": 427,
            "color": "#fddc7b"
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
            "load": 2,
            "maxload": 427,
            "color": "#fddc7b"
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
            "load": 2,
            "maxload": 427,
            "color": "#defc87"
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
            "load": 2,
            "maxload": 427,
            "color": "#defc87"
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
            "load": 4,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 4,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 2,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 2,
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 1,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 2,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#eb4d42"
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
            "load": 4,
            "maxload": 427,
            "color": "#eb4d42"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 3,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 2,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 2,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 3,
            "maxload": 427,
            "color": "#fa9163"
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
            "load": 5,
            "maxload": 427,
            "color": "#e13130"
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
            "load": 5,
            "maxload": 427,
            "color": "#e13130"
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
            "load": 1,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 1,
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 3,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 9,
            "maxload": 427,
            "color": "#defc87"
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
            "load": 9,
            "maxload": 427,
            "color": "#defc87"
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
            "load": 2,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 2,
            "maxload": 427,
            "color": "#fda36a"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecb77"
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
            "load": 2,
            "maxload": 427,
            "color": "#fecb77"
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
            "load": 1,
            "maxload": 427,
            "color": "#fce57e"
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
            "load": 1,
            "maxload": 427,
            "color": "#fce57e"
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
            "load": 4,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 4,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 3,
            "maxload": 427,
            "color": "#fdac6d"
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
            "load": 3,
            "maxload": 427,
            "color": "#fdac6d"
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
            "load": 9,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 9,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 2,
            "maxload": 427,
            "color": "#da1e22"
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
            "maxload": 427,
            "color": "#da1e22"
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
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 2,
            "maxload": 427,
            "color": "#74fc7a"
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
            "load": 2,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 2,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 3,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 3,
            "maxload": 427,
            "color": "#fc9a67"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 2,
            "maxload": 427,
            "color": "#98fb83"
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
            "load": 1,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 1,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 2,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 2,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 4,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 4,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 4,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 4,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec274"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec274"
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
            "maxload": 427,
            "color": "#feb972"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb972"
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
            "load": 3,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 3,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 9,
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 9,
            "maxload": 427,
            "color": "#fce97f"
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
            "load": 6,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 6,
            "maxload": 427,
            "color": "#f57557"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9875f"
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
            "maxload": 427,
            "color": "#f9875f"
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
            "load": 9,
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 9,
            "maxload": 427,
            "color": "#df2b2c"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 4,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 4,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#fed479"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 2,
            "maxload": 427,
            "color": "#feb06f"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8fe7e"
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
            "maxload": 427,
            "color": "#f8fe7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9875f"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9875f"
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
            "load": 3,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 3,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#e9fd84"
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
            "maxload": 427,
            "color": "#e9fd84"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 1,
            "maxload": 427,
            "color": "#e3fc86"
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
            "maxload": 427,
            "color": "#e3fc86"
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
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 2,
            "maxload": 427,
            "color": "#fec676"
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
            "load": 1,
            "maxload": 427,
            "color": "#89fb80"
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
            "load": 1,
            "maxload": 427,
            "color": "#89fb80"
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
            "load": 1,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 1,
            "maxload": 427,
            "color": "#6cfc78"
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
            "load": 1,
            "maxload": 427,
            "color": "#e9fd84"
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
            "load": 1,
            "maxload": 427,
            "color": "#e9fd84"
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
            "maxload": 427,
            "color": "#f26650"
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
            "maxload": 427,
            "color": "#f26650"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 1,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#dafb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 1,
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 1,
            "maxload": 427,
            "color": "#e7423b"
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
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 1,
            "maxload": 427,
            "color": "#edfd83"
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
            "maxload": 427,
            "color": "#edfd83"
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
            "load": 2,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#d3fb89"
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
            "maxload": 427,
            "color": "#d3fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#93fb82"
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
            "maxload": 427,
            "color": "#93fb82"
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
            "maxload": 427,
            "color": "#f26650"
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
            "load": 1,
            "maxload": 427,
            "color": "#f26650"
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
            "maxload": 427,
            "color": "#e7fc85"
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
            "maxload": 427,
            "color": "#e7fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#d30f15"
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
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 1,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 3,
            "maxload": 427,
            "color": "#ec5245"
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
            "load": 3,
            "maxload": 427,
            "color": "#ec5245"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "load": 1,
            "maxload": 427,
            "color": "#33fe69"
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
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "maxload": 427,
            "color": "#fda36a"
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
            "maxload": 427,
            "color": "#fda36a"
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
            "maxload": 427,
            "color": "#49fe6e"
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
            "maxload": 427,
            "color": "#49fe6e"
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
            "maxload": 427,
            "color": "#fecf78"
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
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 1,
            "maxload": 427,
            "color": "#e53d38"
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
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#e7423b"
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
            "load": 2,
            "maxload": 427,
            "color": "#faf781"
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
            "load": 2,
            "maxload": 427,
            "color": "#faf781"
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
            "load": 3,
            "maxload": 427,
            "color": "#c0fa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#c0fa89"
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
            "maxload": 427,
            "color": "#93fb82"
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
            "load": 1,
            "maxload": 427,
            "color": "#93fb82"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb570"
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
            "load": 1,
            "maxload": 427,
            "color": "#feb570"
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
            "load": 3,
            "maxload": 427,
            "color": "#fdd87a"
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
            "load": 3,
            "maxload": 427,
            "color": "#fdd87a"
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
            "load": 2,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 2,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 1,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 1,
            "maxload": 427,
            "color": "#c6fb89"
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
            "maxload": 427,
            "color": "#e33734"
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
            "load": 1,
            "maxload": 427,
            "color": "#e33734"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f1614d"
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
            "load": 1,
            "maxload": 427,
            "color": "#c6fb89"
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
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 4,
            "maxload": 427,
            "color": "#c6fb89"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#e13130"
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
            "maxload": 427,
            "color": "#e13130"
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
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 1,
            "maxload": 427,
            "color": "#df2b2c"
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
            "maxload": 427,
            "color": "#d8fb88"
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
            "maxload": 427,
            "color": "#d8fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 1,
            "maxload": 427,
            "color": "#f26650"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "maxload": 427,
            "color": "#effd82"
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
            "maxload": 427,
            "color": "#8efb81"
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
            "load": 1,
            "maxload": 427,
            "color": "#8efb81"
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
            "load": 1,
            "maxload": 427,
            "color": "#f36b52"
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
            "maxload": 427,
            "color": "#f36b52"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "maxload": 427,
            "color": "#f36b52"
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
            "maxload": 427,
            "color": "#f36b52"
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
            "maxload": 427,
            "color": "#ec5245"
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
            "maxload": 427,
            "color": "#ec5245"
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
            "maxload": 427,
            "color": "#93fb82"
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
            "maxload": 427,
            "color": "#93fb82"
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
            "maxload": 427,
            "color": "#ef5c4b"
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
            "maxload": 427,
            "color": "#ef5c4b"
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
            "maxload": 427,
            "color": "#defc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#defc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 1,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "load": 2,
            "maxload": 427,
            "color": "#f9ff7d"
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
            "maxload": 427,
            "color": "#89fb80"
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
            "maxload": 427,
            "color": "#89fb80"
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
            "load": 1,
            "maxload": 427,
            "color": "#fb9565"
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
            "maxload": 427,
            "color": "#fb9565"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 4,
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 4,
            "maxload": 427,
            "color": "#df2b2c"
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
            "load": 1,
            "maxload": 427,
            "color": "#fce57e"
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
            "maxload": 427,
            "color": "#fce57e"
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
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 1,
            "maxload": 427,
            "color": "#f8835d"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "load": 2,
            "maxload": 427,
            "color": "#a5fa86"
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
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 1,
            "maxload": 427,
            "color": "#7cfc7c"
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
            "load": 1,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 1,
            "maxload": 427,
            "color": "#e0fc86"
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
            "load": 1,
            "maxload": 427,
            "color": "#ebfd83"
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
            "load": 1,
            "maxload": 427,
            "color": "#ebfd83"
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
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 1,
            "maxload": 427,
            "color": "#fecf78"
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
            "load": 2,
            "maxload": 427,
            "color": "#f0fe81"
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
            "load": 2,
            "maxload": 427,
            "color": "#f0fe81"
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
            "maxload": 427,
            "color": "#d30f15"
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
            "load": 1,
            "maxload": 427,
            "color": "#d30f15"
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
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 1,
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 1,
            "maxload": 427,
            "color": "#fa8c61"
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
            "maxload": 427,
            "color": "#fa8c61"
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
            "maxload": 427,
            "color": "#e5fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#e5fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#58fd72"
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
            "load": 1,
            "maxload": 427,
            "color": "#58fd72"
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
            "maxload": 427,
            "color": "#fde17d"
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
            "load": 2,
            "maxload": 427,
            "color": "#fde17d"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "maxload": 427,
            "color": "#f1614d"
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
            "maxload": 427,
            "color": "#fbee7f"
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
            "maxload": 427,
            "color": "#fbee7f"
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
            "load": 1,
            "maxload": 427,
            "color": "#defc87"
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
            "maxload": 427,
            "color": "#defc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "load": 1,
            "maxload": 427,
            "color": "#effd82"
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
            "maxload": 427,
            "color": "#da1e22"
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
            "load": 1,
            "maxload": 427,
            "color": "#da1e22"
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
            "maxload": 427,
            "color": "#eb4d42"
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
            "load": 1,
            "maxload": 427,
            "color": "#eb4d42"
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
            "load": 1,
            "maxload": 427,
            "color": "#e5fc85"
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
            "load": 1,
            "maxload": 427,
            "color": "#e5fc85"
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
            "maxload": 427,
            "color": "#f26650"
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
            "maxload": 427,
            "color": "#f26650"
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
            "load": 3,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 3,
            "maxload": 427,
            "color": "#bdfa89"
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
            "load": 2,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 2,
            "maxload": 427,
            "color": "#d5fb88"
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
            "load": 1,
            "maxload": 427,
            "color": "#e53d38"
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
            "maxload": 427,
            "color": "#e53d38"
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
            "load": 4,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 4,
            "maxload": 427,
            "color": "#fda76c"
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
            "load": 1,
            "maxload": 427,
            "color": "#fc9e69"
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
            "maxload": 427,
            "color": "#fc9e69"
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
            "load": 4,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 4,
            "maxload": 427,
            "color": "#dc2527"
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
            "load": 3,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 3,
            "maxload": 427,
            "color": "#acfa87"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#82fb7e"
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
            "load": 2,
            "maxload": 427,
            "color": "#89fb80"
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
            "load": 2,
            "maxload": 427,
            "color": "#89fb80"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#faf781"
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
            "maxload": 427,
            "color": "#faf781"
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
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#dcfc87"
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
            "load": 1,
            "maxload": 427,
            "color": "#b7fa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#b7fa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#fec676"
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
            "maxload": 427,
            "color": "#fec676"
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
            "maxload": 427,
            "color": "#b0fa88"
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
            "load": 1,
            "maxload": 427,
            "color": "#b0fa88"
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
            "load": 1,
            "maxload": 427,
            "color": "#fa8c61"
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
            "load": 1,
            "maxload": 427,
            "color": "#fa8c61"
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
            "maxload": 427,
            "color": "#d7171c"
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
            "load": 1,
            "maxload": 427,
            "color": "#d7171c"
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
            "load": 1,
            "maxload": 427,
            "color": "#98fb83"
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
            "maxload": 427,
            "color": "#98fb83"
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
            "maxload": 427,
            "color": "#bafa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#bafa89"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.09889
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.0899
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.058435
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.103385
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.022475
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.040455
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.01798
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
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.022475
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.08091
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.621222,
                    45.04495
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.085405
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.103385
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.049445
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.031465
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.058435
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.01798
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.085405
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 6,
            "maxload": 427,
            "color": "#3141a2"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.06293
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.710234,
                    45.0899
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.01798
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.04495
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.03596
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.08091
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
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 9,
            "maxload": 427,
            "color": "#3d5caa"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#212597"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 6,
            "maxload": 427,
            "color": "#3141a2"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 5,
            "maxload": 427,
            "color": "#2c389f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
                    45.09889
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 4,
            "maxload": 427,
            "color": "#272f9b"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 3,
            "maxload": 427,
            "color": "#212597"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.031465
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.06293
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.040455
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.103385
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.04495
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.05394
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.01798
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.09889
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.076415
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.0899
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.02697
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.04495
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.614864,
                    45.076415
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.08091
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.067425
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.058435
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.040455
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.031465
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.067425
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.62758,
                    45.08091
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.69116,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.049445
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.640296,
                    45.040455
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.076415
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.103385
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 2,
            "maxload": 427,
            "color": "#191b93"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.684802,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.716592,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.05394
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
                    45.01798
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.653012,
                    45.0899
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.04495
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.076415
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#191b93"
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
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.65937,
                    45.06293
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.03596
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.703876,
                    45.07192
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.094395
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.665728,
                    45.031465
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.013485
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.058435
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.633938,
                    45.058435
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.672086,
                    45.058435
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
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.646654,
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
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.07192
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
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
                    45.085405
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 1,
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
                    45.085405
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.697518,
                    45.06293
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
            "maxload": 427,
            "color": "#0f0f8f"
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [
                    7.678444,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
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
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 6,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 6,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 9,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 9,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 6,
            "maxload": 427,
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
                    7.65937,
                    45.08091
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "load": 6,
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 5,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 5,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 4,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 3,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
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
            "maxload": 427,
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 2,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "load": 1,
            "maxload": 427,
            "color": "#cc0000"
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
            "maxload": 427,
            "color": "#cc0000"
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
    }
];

//https://gka.github.io/palettes/#/100|d|00429d,96ffea,fbff7c|f9fb82,f72760,cc0000|1|1

L.geoJSON(lines,{
	style(feature){
		return {color:feature.properties.color, weight:(feature.properties.load/feature.properties.maxload*100)+5 , opacity:0.7}
	}
}
).addTo(map);

}
