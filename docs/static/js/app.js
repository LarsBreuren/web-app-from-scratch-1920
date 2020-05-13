import { initialData } from './modules/initialData.js';
import { router } from './modules/routes.js';
import { inputData } from './modules/inputData.js';

document.getElementById("button").addEventListener("click", inputData); //Listen to a click on add location button

initialData(); //Run initialData to retrieve weather data from chosen object
router(); //Handle routes
















