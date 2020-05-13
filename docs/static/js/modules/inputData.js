import { fetchData } from './initialData.js';


export function inputData(){ //Add the location to the website
    let latitude = document.getElementById('Latitude').value
    let longitude = document.getElementById('Longitude').value
    let name =  document.getElementById('Name').value
    let coordinates = latitude + ',' + longitude;
    fetchData(coordinates, name); // Run fetchdata with the given coordinates
  }

