let main = document.getElementById("locations");
let menu = document.getElementById("menu");

export function render(weatherData, name) {
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

export function renderMenu(name) {
  const html = `
          <li><a href="#${name}">${name}</a> </li>
        `;
  menu.insertAdjacentHTML('beforeend', html);
}