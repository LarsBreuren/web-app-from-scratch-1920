import { fetchData } from './initialData.js';

document.getElementById("button").addEventListener("click", inputData); //Listen to a click on add location button

export function inputData(){ //Add the location to the website
    let latitude = document.getElementById('Latitude').value
    let longitude = document.getElementById('Longitude').value
    let name =  document.getElementById('Name').value
    let coordinates = latitude + ',' + longitude;
    fetchData(coordinates, name); // Run fetchdata with the given coordinates
  }

