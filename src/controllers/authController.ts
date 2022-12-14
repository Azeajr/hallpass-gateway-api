import { Request, RequestHandler, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db';

const handleLogin: RequestHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password are required.' });

  const foundUser = await db.users.findOne({ where: { username } });
  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    // const roles = Object.values(foundUser.roles).filter(Boolean);

    const accessToken = jwt.sign(
      // { UserInfo: { username: foundUser.username, roles } },
      { UserInfo: { username: foundUser.username } },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1m' }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: '1d' }
    );

    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);
    // console.log(roles);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    // return res.json({ roles, accessToken });
    return res.json({ accessToken });
  }
  return res.sendStatus(401);
};

export default { handleLogin };
