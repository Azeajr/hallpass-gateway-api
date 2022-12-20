import { Request, Response } from 'express';
import Location from '../model/Location';
import User from '../model/User';

const getDestinations = async (req: Request, res: Response) => {
  const locations: any[] = await Location.find({}, 'name').exec();
  const users: any[] = await User.find({}, 'username').exec();

  res.send(locations.concat(users).map((destination) => destination.name ?? destination.username));
};

export default { getDestinations };
