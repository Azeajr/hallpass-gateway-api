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
    const roles = await db.roles.findOne({ where: { userId: foundUser.id } });
    const rolesList = Object.entries(roles.dataValues)
      .filter((e) => !e[0].toLowerCase().includes('id') && e[1])
      .map((e) => e[1]);

    const accessToken = jwt.sign(
      { UserInfo: { username: foundUser.username, roles: rolesList } },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1h' }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: '1d' }
    );

    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.json({ roles: rolesList, accessToken });
  }
  return res.sendStatus(401);
};

export default { handleLogin };
