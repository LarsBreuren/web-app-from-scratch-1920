export function rateWeather(currentTemp, wind, vision, locatie) {
    let mark = 0;

    if (currentTemp > 5) {
        mark += 3;
    } else {
        mark - 3;
    }

    if (wind < 15) {
        mark += 3;
    } else {
        mark - 3;
    }

    if (vision > 10) {
        mark += 3;
    } else {
        mark - 3;
    }

    let advice = document.getElementById(locatie);
    let p = document.createElement("b");
    let textNode = document.createTextNode("Motor cijfer:" + mark);

    p.appendChild(textNode);
    advice.appendChild(p);
}