/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jest/require-hook */
import listOfStudents from './0x02-ES6_classes/9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
