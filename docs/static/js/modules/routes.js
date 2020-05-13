
export function router(){
routie({
    ':id' :locatie => {
      updateUI(locatie);
    },
  });
}

  export function updateUI(route) {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      section.classList.remove('active');
      section.classList.remove('checkDetails');
    });
    let activeSection = document.querySelector(`[data-route=${route}]`);
    activeSection.classList.add('active');
    activeSection.classList.add('checkDetails');
}