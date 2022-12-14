import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import db from '../config/db';

const handleNewUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password are required.' });
  const duplicate = await db.users.findOne({ where: { username } });

  if (duplicate) return res.sendStatus(409);

  try {
    const hashPwd = await hash(password, 10);

    const result = await db.users.create({
      username,
      password: hashPwd,
    });
    console.log(result);

    return res.status(201).json({ message: `New user ${username} created!` });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default { handleNewUser };
