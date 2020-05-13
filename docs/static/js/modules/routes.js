
export function router(){
routie({ //Use the # in the url to check what location is asked for.
    ':id' :locatie => {
      updateUI(locatie); // run updateUi with the given location
    },
  });
}

  export function updateUI(route) {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      section.classList.remove('active'); //Remove all locations
      section.classList.remove('checkDetails');
    });
    let activeSection = document.querySelector(`[data-route=${route}]`); //Check what location matches the current one
    activeSection.classList.add('active'); //Show only the chosen location
    activeSection.classList.add('checkDetails');
}