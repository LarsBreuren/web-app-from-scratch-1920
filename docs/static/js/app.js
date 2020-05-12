/*** Handle routes -> refactor into module later ***/

routie({
  //#giphy/425367
  ':id'
  :locatie => {
    updateUI(locatie);
  },
});


function updateUI(route) {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.remove('checkDetails');
  });
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
  activeSection.classList.add('checkDetails');
}
initialData();
/*** Fetching data -> refactor into module later ***/
function initialData() {
  const locations = {  //Object with cities and their coordinates. This way it is easier to manage content
    mijdrecht: "52.2050221,4.880913",
    amsterdam: "52.3702157,4.8951679",
    texel: "53.0547626,4.7977149"
  }
  for (const property in locations) {     //For every location make an article inside the places id and give it an id with the city name.
    fetchData(`${locations[property]}`, `${property}`);
  }
}

function fetchData(location, name) {
  fetch(buildUrl(location)) //Use the url builder to make the correct URL
    .then((response) => { 
      return response.json();
    })
    .then((weatherData) => {
      render(weatherData, name);
      renderMenu(name);
    });
}

function buildUrl(location) {
  const endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
  const key = "60e53b3010cd5224c2ec5d685d4b320b/";
  const end = "?units=si";
  return endpoint + key + location + end; //Add the pieces together to make a nice link fetchData can work with
}

let main = document.getElementById("locations");
function render(weatherData, name) {
    const html = `
            <section class="active" data-route="${name}">
            <h2>${name}  </h2>
            <ul>
              <li>Temperatuur: ${weatherData.currently.temperature} graden</li>
              <li>Windsnelheid: ${weatherData.currently.windSpeed} m/s</li>
              <li>Zicht: ${weatherData.currently.visibility} m</li>
            </ul>
            <ul class="details">
            <li>Bewolking: ${weatherData.currently.cloudCover} </li>
            <li>Type weer: ${weatherData.currently.precipType}</li>
            <li>Omschrijving: ${weatherData.daily.summary}</li>

            </ul>
            <a href="#${name}"> Details </a>
            </section>
          `;
    main.insertAdjacentHTML('beforeend', html);
}

let menu = document.getElementById("menu");
function renderMenu(name) {
  const html = `
          <li><a href="#${name}">${name}</a> </li>
        `;
  menu.insertAdjacentHTML('beforeend', html);
}