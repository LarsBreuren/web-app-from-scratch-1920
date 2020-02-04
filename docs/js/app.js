const locaties = {
  mijdrecht: "52.2050221,4.880913",
  amsterdam: "52.3702157,4.8951679",
  }

  function buildUrl(locatie, cor){
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
    var obj = {
      Temperatuur: myJson.currently.temperature,
      Vochtigheid: myJson.currently.humidity,
      Wolken: myJson.currently.cloudCover}

      var article = document.getElementById("article");

      for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);

      var p = document.createElement("p");
      var textNode = document.createTextNode(`${key}: ${value}`);
  
      p.appendChild(textNode);
      article.appendChild(p);
      }
  });

  // function getLocation(){
  //   return new Promise((resolve,reject) => {
  //     var
  //       pos
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       pos = {
  //         lat: position.coords.latitude,
  //         long: position.coords.longitude
  //       }
  //   })
  // }

  //fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/60e53b3010cd5224c2ec5d685d4b320b/${hfdhgd},4.880913`)
  