import { data } from './data.js';
import { combineAge, renderAge } from './helpers.js';

const container = document.querySelector('[data-h1]');
renderAge(container, data);
