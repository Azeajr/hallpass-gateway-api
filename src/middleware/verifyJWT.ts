/* eslint-disable consistent-return */
// TODO: remove eslint rule
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// TODO: This is done to extend Requests.  Is this necessary?
export interface TokenData {
  user: string;
}

export interface TokenRequest extends Request {
  tokenData: TokenData;
}

const verifyJWT = (req: TokenRequest, res: Response, next: NextFunction) => {
  const authHeader = (req.headers.authorization as string) || (req.headers.Authorization as string);
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, decoded: any) => {
    if (err) return res.sendStatus(403);
    req.tokenData.user = decoded.UserInfo.username;
    // req.roles = decoded.UserInfo.roles;
    next();
  });
};
export default verifyJWT;
