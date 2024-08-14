/** Creates an Express server, sets up middleware for JSON parsing and database
 * file path, uses defined routes, and listens on port 1245. Exported as the
 * default app.
 */

import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

// Middleware to parse JSON
app.use(express.json());

// Middleware to set database file path
app.use((req, res, next) => {
  req.database = process.argv[2];
  next();
});

// Use the defined routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
