/* eslint-disable consistent-return */
import { NextFunction, Response } from 'express';
import { TokenRequest } from '../types/ExpressTypes';

const verifyRoles = (...allowedRoles: any[]) => {
  return (req: TokenRequest, res: Response, next: NextFunction) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    console.log(rolesArray);
    console.log(req.roles);

    const result = req.roles.map((role) => rolesArray.includes(role)).find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

export default verifyRoles;
