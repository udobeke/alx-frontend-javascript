/* eslint-disable no-new */
/* eslint-disable jest/require-hook */
import Building from './0x02-ES6_classes/5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}
