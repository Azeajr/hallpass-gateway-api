import { Request, Response } from 'express';
import db from '../config/db';

const getDestinations = async (req: Request, res: Response) => {
  const locations: any[] = await db.locations.findAll();
  const users: any[] = await db.users.findAll({ attributes: ['username'] });

  res.send(locations.concat(users).map((destination) => destination.name ?? destination.username));
};

export default { getDestinations };
