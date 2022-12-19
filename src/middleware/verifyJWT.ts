/* eslint-disable consistent-return */
// TODO: remove eslint rule
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenRequest } from '../types/ExpressTypes';

// // TODO: This is done to extend Requests.  Is this necessary?
// export interface TokenData {
//   username: string;
// }

const verifyJWT = (req: TokenRequest, res: Response, next: NextFunction) => {
  const authHeader = (req.headers.authorization as string) || (req.headers.Authorization as string);
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, decoded: any) => {
    if (err) return res.sendStatus(403);
    // TODO: non-null assertion is maybe not what I want here
    req.username = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next();
  });
};
export default verifyJWT;
// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';

// const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = (req.headers.authorization as string) || (req.headers.Authorization as string);
//   if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
//   const token = authHeader.split(' ')[1];

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, decoded) => {
//     if (err) return res.sendStatus(403);
//     req.username = decoded.UserInfo.username;
//     // req.roles = decoded.UserInfo.roles;
//     next();
//   });
// };

// export default verifyJWT;
