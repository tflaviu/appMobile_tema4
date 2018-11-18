import Teacher from './Teacher/Teacher';
import Student from './Student/Student';

const student = new Student('Turcut Flaviu', 22, 3, 8.5);
const teacher = new Teacher('Andrei Iovan', 25, 'Tehnologii pentru dispozitive mobile', 'Teacher');

console.log(student.toString());
console.log(teacher.toString());
