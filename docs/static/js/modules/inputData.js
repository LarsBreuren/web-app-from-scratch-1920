import { fetchData } from './initialData.js';

export function inputData(){
    let latitude = document.getElementById('Latitude').value
    let longitude = document.getElementById('Longitude').value
    let name =  document.getElementById('Name').value
    let coordinates = latitude + ',' + longitude;
    fetchData(coordinates, name);
  }

