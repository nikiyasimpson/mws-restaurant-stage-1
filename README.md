# Restaurant Reviews Mobile App

Use this web application to view restaurant reviews in the New York City area.

## Project Overview

For this **Restaurant Reviews** project, a static webpage has been converted to a mobile-ready web application. For this stage of the project, we have added accessibility features for screen reader use and a service worker to create an offline experience for users.


## Table of Contents
* [How to Install](#howtoinstall)
* [Contributing](#contributing)
* [How to Use](#howtouse)
* [Authors](#authors)

## How to Install

To use this application, download all the files from this github repository to your local computer. Start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

With your server running, visit the site: `http://localhost:8000` to view the application.

Detailed instructions are available in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

The repository is modified from starter code provided for _all_ [Udacity](https://udacity.com) students.


## How to Use

To use the application, open your web browser and type in  `http://localhost:8000` after starting the server on your local computer. See [How to Install](#howtoinstall). Click on map markers to view restaurant details for each restaurant on the map. Also use the filter select options to filter restaurants by neighborhood or type of cuisine.

Click on View details for restaurants in list to view restaurant information, hours, and reviews.

## Authors

Original static HTML file provided by [Udacity, Front End Web Development Course](http://www.udacity.com).
Written by Nikiya Simpson

## References

This project includes the following libraries

* Bootstrap Fonts for Stars: [https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)

* Google Fonts: [https://fonts.googleapis.com/css?family=Fontdiner+Swanky|Playfair+Display:200](https://fonts.googleapis.com/css?family=Fontdiner+Swanky|Playfair+Display:200)

* Mapbox:
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

* Cross Browser Normalize CSS:
Normalize.css as a node packaged [module](https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css)


Great [Introduction to Service Workers and Caching](https://www.youtube.com/watch?v=ksXwaWHCW6k&t=1811s) used for assistance with this project.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
