/** Defines a class StudentsController with two static methods:
 * - getAllStudents: Returns a 200 status and lists students grouped by field.
 *   Handles database loading errors.
 * - getAllStudentsByMajor: Returns a 200 status and lists students in
 *   a specified major. Handles invalid major and database loading errors.
 */

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const studentsByField = await readDatabase(req.database);
      let response = 'This is the list of our students\n';

      Object.entries(studentsByField).sort().forEach(([field, students]) => {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database\n${error.message}`);
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(req.database);
      const studentsInMajor = studentsByField[major] || [];

      const response = `List: ${studentsInMajor.join(', ')}\n`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database\n${error.message}`);
    }
  }
}

export default StudentsController;
