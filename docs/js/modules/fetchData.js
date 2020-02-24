import { buildUrl } from './buildUrl.js';
import { rateWeather } from './rateWeather.js';

export function fetchData(location, name, article) {
    fetch(buildUrl(location))
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let obj = {
          locatie: name,
          Temperatuur: myJson.currently.temperature,
        //   Vochtigheid: myJson.currently.humidity,
        //   Wolken: myJson.currently.cloudCover,
          Windsnelheid: myJson.currently.windSpeed,
          Zicht: myJson.currently.visibility
        }

        const temp = obj.Temperatuur;
        const wind = obj.Windsnelheid;
        const vision = obj.Zicht;
        const locatie = obj.locatie;

        for (let [key, value] of Object.entries(obj)) {
          let li = document.createElement("li");
          let textNode = document.createTextNode(`${key}: ${value}`);
  
          li.appendChild(textNode);
          article.appendChild(li);
        }
        rateWeather(temp,wind,vision, locatie);
      });

  }