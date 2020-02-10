const locaties = {
  mijdrecht: "52.2050221,4.880913",
  amsterdam: "52.3702157,4.8951679",
  }

  function buildUrl(locatie){
    let endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
    let key =  "60e53b3010cd5224c2ec5d685d4b320b/"
    let end = "?units=si"
    return endpoint + key + locatie + end
  }    

  for (locatie in locaties) {
    if (locaties.hasOwnProperty(locatie)) {
      buildUrl(locatie, locaties[locatie])
   }
  }

   fetch(buildUrl(locaties.mijdrecht))
  .then((response) => {
    return response.json();
  })
  
  .then((myJson) => {
    let obj = {
      Temperatuur: myJson.currently.temperature,
      Vochtigheid: myJson.currently.humidity,
      Wolken: myJson.currently.cloudCover,
      windSpeed: myJson.currently.windSpeed}

      let temp = obj.Temperatuur;
      let article = document.getElementById("article");

      for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);

      let p = document.createElement("p");
      let textNode = document.createTextNode(`${key}: ${value}`);
  
      p.appendChild(textNode);
      article.appendChild(p);
      }
      rating(temp);
  });   

  function rating(val){
    let temp = val;
    let mark = 0;
    if ( temp < 5) {
      console.log("meh");
    } else {
      console.log("Lekker weertje");
      let p = document.createElement("b");
      let textNode = document.createTextNode("Prima motor weer!");
      p.appendChild(textNode);
      article.appendChild(p);
    }
  }


  