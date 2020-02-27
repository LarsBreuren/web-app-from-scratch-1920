import { buildUrl } from './buildUrl.js';
import { rateWeather } from './rateWeather.js';

export function fetchData(location, name, article) {
    fetch(buildUrl(location)) //Use the url builder to make the correct URL
      .then((response) => { 
        return response.json(); 
      })
      .then((weatherData) => {
        let details = { //Make an object with the desired data
          locatie: name,
          Temperatuur: weatherData.currently.temperature,
          Windsnelheid: weatherData.currently.windSpeed,
          Zicht: weatherData.currently.visibility,
        }
        const temp = details.Temperatuur; //Make some variables to use in the calculation function
        const wind = details.Windsnelheid;
        const vision = details.Zicht;
        const locatie = details.locatie;
        const timeZone = weatherData.timezone

        const footer = document.querySelector('footer'); //Show current timezone in footer
        const data = {
          timeZone: `Tijdzone: ${timeZone}`
        };
  
        setTimeout(renderTemplate(footer, data), 100); //Render transparency template
        function renderTemplate(element, data) {
          return () => {
            Transparency.render(element, data);
          };
        }

        for (let [key, value] of Object.entries(details)) { //Make a list item from every element in the details
          let li = document.createElement("li");
          let textNode = document.createTextNode(`${key}: ${value}`);
  
          li.appendChild(textNode);
          article.appendChild(li);
        }
        rateWeather(temp,wind,vision, locatie); //Start rateWeahter function with the given variables
      });

  }

