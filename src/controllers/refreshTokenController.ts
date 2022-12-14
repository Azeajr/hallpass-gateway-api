import { verify, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import db from '../config/db';

const handleRefreshToken = async (req: Request, res: Response) => {
  const { cookies } = req;

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  const foundUser = await db.users.findOne({ where: { refreshToken } });

  if (!foundUser) return res.sendStatus(403);

  verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, decoded: any) => {
    if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

    // const roles = Object.values(foundUser.roles);

    const accessToken = sign(
      // { UserInfo: { username: decoded.username, roles } },
      { UserInfo: { username: decoded.username } },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1m' }
    );

    return res.json({ accessToken });
  });
  return res.sendStatus(403);
};

export default { handleRefreshToken };
