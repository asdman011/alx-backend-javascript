// main.ts

// Import the required classes and interfaces
import { Subjects } from './subjects/Subject'; // Adjust the path if necessary
import { Cpp, Teacher as CppTeacher } from './subjects/Cpp';
import { Java, Teacher as JavaTeacher } from './subjects/Java';
import { React, Teacher as ReactTeacher } from './subjects/React';

// Constants for Cpp, Java, and React Subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Teacher object with experienceTeachingC = 10
export const cTeacher: CppTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Set cTeacher as the teacher for each Subject and print the required information
cpp.setTeacher(cTeacher);
console.log('Cpp:', cpp.getRequirements());
console.log('Cpp:', cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log('Java:', java.getRequirements());
console.log('Java:', java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log('React:', react.getRequirements());
console.log('React:', react.getAvailableTeacher());
