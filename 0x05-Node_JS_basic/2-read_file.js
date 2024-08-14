/**
 * Reads a CSV database file containing student information, counts the
 * total number of students, and logs the count and list of students in
 * each field.
 */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = [];

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        students.push({ firstname, field });
      }
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = { count: 1, names: [student.firstname] };
      } else {
        fields[student.field].count += 1;
        fields[student.field].names.push(student.firstname);
      }
    });

    Object.entries(fields).forEach(([field, info]) => {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
