import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import User from '../model/User';

const handleNewUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password are required.' });
  const duplicate = await User.findOne({ username }).exec();

  if (duplicate) return res.sendStatus(409);

  try {
    const hashPwd = await hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashPwd,
    });

    console.log(newUser);

    return res.status(201).json({ message: `New user ${username} created!` });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default { handleNewUser };
