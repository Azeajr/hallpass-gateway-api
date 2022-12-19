import { verify, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import db from '../config/db';

const handleRefreshToken = async (req: Request, res: Response) => {
  const { cookies } = req;
  console.log(cookies);

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  const foundUser = await db.users.findOne({ where: { refreshToken } });

  if (!foundUser) return res.sendStatus(403);

  const roles = await db.roles.findOne({ where: { userId: foundUser.id } });
  const rolesList = Object.entries(roles.dataValues)
    .filter((e) => !e[0].toLowerCase().includes('id') && e[1])
    .map((e) => e[1]);

  verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, decoded: any) => {
    if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

    const accessToken = sign(
      { UserInfo: { username: decoded.username, roles: rolesList } },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1m' }
    );

    return res.json({ accessToken });
  });
  return res.sendStatus(403);
};

export default { handleRefreshToken };
