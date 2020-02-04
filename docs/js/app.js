const mijdrecht = "52.2050221,4.880913";
const amsterdam = "52.3702157,4.8951679";

var locaties = {
  mijdrecht: "52.2050221,4.880913",
  amsterdam: "52.3702157,4.8951679",
  }
  console.log(locaties);


endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/',
    key =  "60e53b3010cd5224c2ec5d685d4b320b/",
    locatie =(amsterdam),
    end = "?units=si",
    url = (endpoint) + (key) + (locatie) + (end);

    console.log(url);

   fetch(url)
  .then((response) => {
    return response.json();
  })
  
  .then((myJson) => {

    var obj = {
      temp: myJson.currently.temperature,
      humidity: myJson.currently.humidity,
      cloud: myJson.currently.cloudCover}

      var article = document.getElementById("article");

    for(let key in obj){
      var postfix;
  
      if(key == "temp")
          postfix = "Graden";
      else if(key == "humidity")
          postfix = "Vochtigheid";
      else
          postfix = "Bewolking";
  
      var p = document.createElement("p");
      var textNode = document.createTextNode(obj[key] + " " + postfix);
  
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
  