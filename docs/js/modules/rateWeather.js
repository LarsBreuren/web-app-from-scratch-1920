export function rateWeather(temp, wind, vision, locatie) {
    let mark = 0;

    if (temp > 5) {
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

    console.log(locatie);


    let advice = document.getElementById(locatie);
    let p = document.createElement("b");
    let textNode = document.createTextNode("Motor cijfer:" + mark);

    p.appendChild(textNode);
    advice.appendChild(p);
}