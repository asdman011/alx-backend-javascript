/** Defines a class AppController with a static method getHomepage that returns
 * a 200 status and the message "Hello Holberton School!".
 */

class AppController {
  static getHomepage (req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
