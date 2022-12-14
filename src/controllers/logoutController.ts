// import { findOne } from '../model/User';

import { Request, Response } from 'express';
import db from '../config/db';

const handleLogout = async (req: Request, res: Response) => {
  // On client, also delete the accessToken

  const { cookies } = req;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  const foundUser = await db.users.findOne({ where: { refreshToken } });
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
    return res.sendStatus(204);
  }

  // Delete refresh token in DB
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
  return res.sendStatus(204);
};

export default { handleLogout };
