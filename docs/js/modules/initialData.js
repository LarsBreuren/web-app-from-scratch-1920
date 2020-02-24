import { fetchData } from './fetchData.js';

export function initialData() {
    const locaties = {
      mijdrecht: "52.2050221,4.880913",
      amsterdam: "52.3702157,4.8951679"
    }
  
    for (const property in locaties) {
      let section = document.getElementById("places");
      let article = document.createElement("article");
      article.setAttribute("id", `${property}`);
      section.appendChild(article);
  
      fetchData(`${locaties[property]}`, `${property}`, article);
    }
  }

