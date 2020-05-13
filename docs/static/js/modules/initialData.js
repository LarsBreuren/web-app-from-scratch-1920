import {buildUrl} from "./buildUrl.js";
import {render} from "./render.js";
import {renderMenu} from "./render.js";

export function initialData() {
    const locations = {  //Object with cities and their coordinates. This way it is easier to manage content
      mijdrecht: "52.2050221,4.880913",
      amsterdam: "52.3702157,4.8951679",
      texel: "53.0547626,4.7977149"
    }
    for (const property in locations) {     //For every location make an article inside the places id and give it an id with the city name.
      fetchData(`${locations[property]}`, `${property}`);
    }
  }
  
  export async function fetchData(location, name) {
    let loading = document.getElementById("loading");
    loading.classList.add('load');

    await fetch(buildUrl(location)) //Use the url builder to make the correct URL
      .then((response) => { 
        return response.json();
      })
      .then((weatherData) => {
        render(weatherData, name);
        renderMenu(name);
        
        loading.classList.remove('load');
        var timeZone = {
            name: weatherData.timezone
          };
        Transparency.render(document.querySelector(`#template`), timeZone)
      });
  }