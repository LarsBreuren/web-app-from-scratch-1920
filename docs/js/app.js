import { test } from '../data/initial.js';

test();
initialData();

function initialData() {

  const locaties = {
    mijdrecht: "52.2050221,4.880913",
    amsterdam: "52.3702157,4.8951679"
  }

  for (const property in locaties){
        let section = document.getElementById("places");
        let article = document.createElement("article");
        let ul = document.createElement("ul");
        section.appendChild(article);
        fetchData(`${locaties[property]}`, `${property}`, article );
  }
}

function fetchData(loc,name, article){
  fetch(buildUrl(loc))
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      let obj = {
        locatie: name,
        Temperatuur: myJson.currently.temperature,
        Vochtigheid: myJson.currently.humidity,
        Wolken: myJson.currently.cloudCover,
        Windsnelheid: myJson.currently.windSpeed,
        Zicht: myJson.currently.visibility
      }

      let temp = obj.Temperatuur;

      for (let [key, value] of Object.entries(obj)) {

        let li = document.createElement("li");

        let textNode = document.createTextNode(`${key}: ${value}`);
        
        li.appendChild(textNode);
        article.appendChild(li);
      }
      rateWeather(temp);
    });
}

function buildUrl(locatie) {
  const endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
  const key = "60e53b3010cd5224c2ec5d685d4b320b/"
  const end = "?units=si"
  return endpoint + key + locatie + end
}


function rateWeather(current) {
  let temp = current;
  let mark = 0;
  if (temp < 5) {
    console.log("meh");
  } else {

    let advice = document.getElementById("advice");
    let p = document.createElement("b");
    let textNode = document.createTextNode("Prima motor weer!");


    p.appendChild(textNode);
    advice.appendChild(p);
  }
}
