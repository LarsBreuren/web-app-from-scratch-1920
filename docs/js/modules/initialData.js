import { fetchData } from './fetchData.js';

export function initialData() {
    const locations = {  //Object with cities and their coordinates. This way it is easier to manage content
      mijdrecht: "52.2050221,4.880913",
      amsterdam: "52.3702157,4.8951679",
    }
  
    for (const property in locations) {     //For every location make an article inside the places id and give it an id with the city name.
      let section = document.getElementById("places");
      let article = document.createElement("article");
      article.setAttribute("id", `${property}`);
      section.appendChild(article);
  
      fetchData(`${locations[property]}`, `${property}`, article); // start the fetchData function with the given cities.
    }
  }

