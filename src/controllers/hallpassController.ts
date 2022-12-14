import { Request, Response } from 'express';
import db from '../config/db';

const getHallpasses = async (req: Request, res: Response) => {
  const hallpasses = await db.hallpasses.findAll();
  res.send(hallpasses);
};

const postHallpass = async (req: Request, res: Response) => {
  const { date, firstName, lastName, origin, destination, timer, state } = req.body;

  await db.hallpasses.create({ date, firstName, lastName, origin, destination, timer, state });

  res.send('Hallpass posted successfully');
};

export { getHallpasses, postHallpass };
