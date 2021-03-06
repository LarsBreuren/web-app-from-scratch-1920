# Web app from scratch with Darksky API 
This app uses data from the Darksky API and shows multiple locations so you know where to ride! 
Of course there will be riders that never stop riding so it will also show the relevant information so they can decide for themselves.

![scrnsht](https://user-images.githubusercontent.com/43336468/81846206-027fac80-9552-11ea-9330-be22e4377d11.png)

## Live demo 
https://larsbreuren.github.io/web-app-from-scratch-1920/ 


## API Request 
The app fetches the following data 
  * Current forecast
  * Current forecast on location
  * Forecast for the coming dates in a summary
  
  Example of the given JSON data from darksky:
  
  ![json](https://user-images.githubusercontent.com/43336468/81908891-1ff05d00-95ca-11ea-8fc6-8a04c981965c.png)


### API restrictions 
The API requests are capped at 1000 per day, after that it will be 0.0001$ per request.

## Design patterns 
 * camelCasing
 * use of ;
 * single tab
 * no vars 

## Micro libraries used 
* Routie for routes
* transparency for rendering some HTML elements

## Nice to haves 
* Using current location for advice
* Change background based on current weather
* Calculater to rate the weather

## Actor diagram 
Object that are part of my code that handle functionality:
![Actor diagram](https://user-images.githubusercontent.com/43336468/81849230-89368880-9556-11ea-91f5-43452cd6fac2.jpg)


## Interaction diagram 
How do the actors connect and work toghether. This diagram shows the flow of my app
![Interacton](https://user-images.githubusercontent.com/43336468/81909325-bae93700-95ca-11ea-8d97-908f34bc90b4.jpg)




