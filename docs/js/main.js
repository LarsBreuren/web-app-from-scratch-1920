
initialData();


function initialData() {
    const locations = {  //Object with cities and their coordinates. This way it is easier to manage content
      mijdrecht: "52.2050221,4.880913",
      amsterdam: "52.3702157,4.8951679",
      texel: "53.0547626,4.7977149"
    }
  
    for (const property in locations) {     //For every location make an article inside the places id and give it an id with the city name.
      let section = document.getElementById("locations");
      let article = document.createElement("article");
      article.setAttribute("id", `${property}`);
      section.appendChild(article);

      let header = document.createElement("H2");
      let title =  document.createTextNode(`${property}`);
      header.appendChild(title);
      document.getElementById(`${property}`).appendChild(header);

      fetchData(`${locations[property]}`, `${property}`, article); // start the fetchData function with the given cities.
    }
  }


 function fetchData(location, name) {
    // let temps = [];
      fetch(buildUrl(location)) //Use the url builder to make the correct URL
        .then((response) => { 
          return response.json();
        })
    
        .then((weatherData) => {
          let details = { 
            locatie: name,
            Temperatuur: weatherData.currently.temperature,
            // Windsnelheid: weatherData.currently.windSpeed,
            // Zicht: weatherData.currently.visibility,
          }
          console.log(details);

        });
}




function buildUrl(location) {
    const endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    const key = "60e53b3010cd5224c2ec5d685d4b320b/";
    const end = "?units=si";
    return endpoint + key + location + end; //Add the pieces together to make a nice link fetchData can work with
  }