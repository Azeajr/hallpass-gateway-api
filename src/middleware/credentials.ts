import { NextFunction, Request, Response } from 'express';
import allowedOrigins from '../config/allowedOrigins';

const credentials = (req: Request, res: Response, next: NextFunction) => {
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin as string)) {
    // TODO: not sure about true
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
};

export default credentials;
