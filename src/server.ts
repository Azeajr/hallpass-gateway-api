import express from 'express';
import cors from 'cors';
// import db from './config/db';
// import setup from './setup';
import cookieParser from 'cookie-parser';

import { logger } from './middleware/logEvents';
import errorHandler from './middleware/errorHandler';
import corsOptions from './config/corsOptions';
import hallpasses from './routes/api/hallpasses';
import users from './routes/api/users';
import destinations from './routes/api/destinations';
import root from './routes/root';
import credentials from './middleware/credentials';

import register from './routes/register';
import auth from './routes/auth';
import refresh from './routes/refresh';
import logout from './routes/logout';

import verifyJWT from './middleware/verifyJWT';

const app = express();
const PORT = 3002;

// setup(db);

app.use(logger);

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

// Serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', root);

app.use('/register', register);
app.use('/auth', auth);
app.use('/refresh', refresh);
app.use('/logout', logout);

app.use(verifyJWT);

app.use('/users', users);

app.use('/destinations', destinations);

app.use('/hallpasses', hallpasses);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
