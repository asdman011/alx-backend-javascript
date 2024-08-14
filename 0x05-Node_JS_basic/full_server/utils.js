/** Reads the database file asynchronously and returns a promise with an object
 * containing arrays of first names of students per field.
 */

import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const studentsByField = {};

        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          if (firstname && lastname && age && field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [firstname];
            } else {
              studentsByField[field].push(firstname);
            }
          }
        });

        resolve(studentsByField);
      }
    });
  });
};
