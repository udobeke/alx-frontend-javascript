/* eslint-disable jest/require-hook */
import getListStudents from './0x03-ES6_data_manipulation/0-get_list_students';
import getStudentsByLocation from './0x03-ES6_data_manipulation/2-get_students_by_loc';

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
