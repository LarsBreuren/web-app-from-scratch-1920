let mapSection = document.getElementById("map");
let filterSection = document.getElementById("filter");
let reduceSection = document.getElementById("reduce");
map();
filter();
reduce();

function goodTemp(value) {
    return value >= 12
  }

function map(){
      let fahrenheit = [110, 120, 90, 50, 20, 60, 90, 80, 150, 210, 40, 310];
      let celcius = fahrenheit.map(function(elem) {
        return Math.round((elem - 32) * 5 / 9);
    });
      renderMap(fahrenheit, celcius)
}

function reduce(){
    let temps = [11, 12, 9, 5, 2, 6, 9, 8, 15, 21, 4, 31];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let combined = temps.reduce(reducer);
    let avarageTemp = combined / temps.length;
    let fixedNumber = avarageTemp.toFixed(2);
    renderReduce(fixedNumber)
}
  

function filter(){
    let temps = [11, 12, 9, 5, 2, 6, 9, 8, 15, 21, 4, 31].filter(goodTemp)
    renderFilter(temps.length)
}

function renderMap(fahrenheit, celcius) {
    const html = `
        <p> Fahrenheit: ${fahrenheit}  </p>
        <p> Celcius: ${celcius}  </p>
          `;
    mapSection.insertAdjacentHTML('beforeend', html);
}
  function renderFilter(length) {
    const html = `
        <p> In ${length} steden is het lekker weer! (12 graden of hoger.) </p>
          `;
    filterSection.insertAdjacentHTML('beforeend', html);
}
function renderReduce(avarageTemp) {
    const html = `
        <p> Het is gemiddeld ${avarageTemp} graden!  </p>
          `;
    reduceSection.insertAdjacentHTML('beforeend', html);
}