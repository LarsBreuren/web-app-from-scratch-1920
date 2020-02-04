fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/60e53b3010cd5224c2ec5d685d4b320b/52.2050221,4.880913?units=si`)
  .then((response) => {
    return response.json();
  })
  
  .then((myJson) => {
    // console.log(myJson);
    // var para = document.createElement("p");
    // var node = document.createTextNode(myJson.currently.temperature + " Graden");

    // var para2 = document.createElement("b");
    // var node2 = document.createTextNode(myJson.currently.humidity + " Vochtigheid");

    // para.appendChild(node);
    // para2.appendChild(node2);

    // var element = document.getElementById("article");
    // element.appendChild(para);
    // element.appendChild(para2);

    var obj = {
      temp: myJson.currently.temperature,
      humidity: myJson.currently.humidity,
      cloud: myJson.currently.cloudCover}

      var data = JSON.stringify(obj); 
      document.getElementById("p").innerHTML = data; 
  
      console.log(obj)
  
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
  