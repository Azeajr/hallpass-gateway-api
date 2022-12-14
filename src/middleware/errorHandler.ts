import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logEvents } from './logEvents';

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
  console.error(err.stack);
  res.status(500).send(err.message);
};

export default errorHandler;
