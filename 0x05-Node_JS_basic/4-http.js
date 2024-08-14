/** Creates a small HTTP server using the http module, listens on port 1245,
 * and responds with "Hello Holberton School!" for any endpoint.
 */
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
