/* eslint-disable jest/require-hook */
import SkyHighBuilding from './0x02-ES6_classes/6-sky_high';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
