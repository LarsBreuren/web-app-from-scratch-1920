# Web app from scratch with Darksky API #
This app uses data from the Darksky API and shows multiple locations so you know where to ride! 
Of course there will be riders that never stop riding so it will also show the relevant information so they can decide for themselves.

![scrnsht](https://user-images.githubusercontent.com/43336468/81846206-027fac80-9552-11ea-9330-be22e4377d11.png)

## Live demo ##
https://larsbreuren.github.io/web-app-from-scratch-1920/ 


## API Request ##
The app fetches the following data 
  * Current forecast
  * Current forecast on location
  * Forecast for the coming dates in a summary

## API restrictions ##
The API requests are capped at 1000 per day, after that it will be 0.0001$ per request.

## Design patterns ##
 * camelCasing
 * use of ;
 * single tab
 * no vars 

## Micro libraries used ##
* Routie for routes
* transparency for rendering some HTML elements

## Nice to haves ##
* Using current location for advice
* Change background based on current weather
* Calculater to rate the weather

## Actor diagram ##
![Actor diagram](https://user-images.githubusercontent.com/43336468/75484324-d6b84600-59a8-11ea-8c6b-479463b05a85.jpg)

## Interaction diagram ##
![Interaction Diagram](https://user-images.githubusercontent.com/43336468/75484332-de77ea80-59a8-11ea-9bd8-8c64d0550c97.jpg)



