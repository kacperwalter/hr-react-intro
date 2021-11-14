import { data } from './data.js';
import { combineAge, renderAge } from './helpers.js';
import lodash from lodash;

console.log(lodash.camelCase('twoj stary najebany'));

console.log(combineAge(data));
const container = document.querySelector('#age');
renderAge(container, data);
