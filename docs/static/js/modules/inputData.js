export function test(){
  console.log('im imported!')
}

export  function inputData(){
    let latitude = document.getElementById('Latitude').value
    let longitude = document.getElementById('Longitude').value
    let name =  document.getElementById('Name').value
    console.log(latitude + longitude)
    let coordinates = latitude + ',' + longitude;

  }


