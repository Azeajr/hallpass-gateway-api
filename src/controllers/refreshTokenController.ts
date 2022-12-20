import { verify, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../model/User';

const handleRefreshToken = async (req: Request, res: Response) => {
  const { cookies } = req;
  console.log(cookies);

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();

  if (!foundUser) return res.sendStatus(403);

  const roles = Object.values(foundUser?.roles!);

  verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, decoded: any) => {
    if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
    // TODO: Need to adjust expiresIn
    const accessToken = sign(
      { UserInfo: { username: decoded.username, roles } },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1m' }
    );

    return res.json({ roles, accessToken });
  });
  return null;
};

export default { handleRefreshToken };
