import { Request, Response } from 'express';
import Location from '../model/Location';
import User from '../model/User';

const postDestination = async (req: Request, res: Response) => {
  const { destination } = req.body;

  await Location.create({
    name: destination,
  });

  res.send('Destination posted successfully');
};

const getDestinations = async (req: Request, res: Response) => {
  const locations: any[] = await Location.find({}, 'name').exec();
  const users: any[] = await User.find({}, 'username').exec();

  res.send(locations.concat(users).map((destination) => destination.name ?? destination.username));
};

const getDestination = async (req: Request, res: Response) => {
  const { destinationId } = req.params;

  const location = await Location.findById({ _id: destinationId }).exec();

  res.send(location?.name);
};

const putDestination = async (req: Request, res: Response) => {
  const { destinationId } = req.params;
  const { destinationName } = req.body;

  await Location.findOneAndUpdate({ _id: destinationId }, { name: destinationName }).exec();

  res.send('Destination updated successfully');
};

const deleteDestination = async (req: Request, res: Response) => {
  const { destinationId } = req.params;

  await Location.findOneAndRemove({ _id: destinationId }).exec();

  res.send('Destination deleted successfully');
};

export default {
  postDestination,
  getDestinations,
  getDestination,
  putDestination,
  deleteDestination,
};
