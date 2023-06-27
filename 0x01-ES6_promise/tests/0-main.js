/* eslint-disable import/extensions */
/* eslint-disable jest/require-hook */
/* eslint-disable import/no-unresolved */
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
