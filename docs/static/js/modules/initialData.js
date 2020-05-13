import {buildUrl} from "./buildUrl.js";
import {render} from "./render.js";
import {renderMenu} from "./render.js";

export function initialData() {
    const locations = {  //Object with cities and their coordinates. This way it is easier to manage content
      mijdrecht: "52.2050221,4.880913",
      amsterdam: "52.3702157,4.8951679",
      texel: "53.0547626,4.7977149"
    }
    for (const property in locations) {     //For each city run the fetch data
      fetchData(`${locations[property]}`, `${property}`);
    }
  }
  
  export async function fetchData(location, name) {
    let loading = document.getElementById("loading"); 
    loading.classList.add('load'); //Show loading icon 

    await fetch(buildUrl(location)) //Use the url builder to make the correct URL for each city
      .then((response) => { 
        return response.json();
      })
      .then((weatherData) => {
        render(weatherData, name); //Render with the given weatherData
        renderMenu(name); // Add city to menu

        loading.classList.remove('load'); //remove loading icon (data is retrieved)
        var timeZone = { //Show the current timezone in the footer with transparency
            name: weatherData.timezone
          };
        Transparency.render(document.querySelector(`#template`), timeZone)
      });
  }