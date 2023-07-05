/* eslint-disable jest/require-hook */
import getListStudents from './0x03-ES6_data_manipulation/0-get_list_students';
import updateStudentGradeByCity from './0x03-ES6_data_manipulation/4-update_grade_by_city';

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }]));
