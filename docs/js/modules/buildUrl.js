export function buildUrl(locatie) {
    const endpoint = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
    const key = "60e53b3010cd5224c2ec5d685d4b320b/"
    const end = "?units=si"
    return endpoint + key + locatie + end
  }