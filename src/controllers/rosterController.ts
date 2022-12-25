import { Request, Response } from 'express';
import Roster from '../model/Roster';
import Student from '../model/Student';
import User from '../model/User';

const getUserRosters = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await Student.find({});
  const rosters: any[] = await Roster.find({ 'user._id': userId }).exec();

  const userData = rosters.map((roster) => {
    return {
      courseTitle: roster.name,
      students: roster.students.map((e: any) => {
        // eslint-disable-next-line no-underscore-dangle
        return { firstName: e.firstName, lastName: e.lastName, id: e._id };
      }),
    };
  });

  res.send(userData);
};

const postRoster = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name, students } = req.body;

  const studentDocs = await Student.create(students);
  const user = await User.findById(userId);
  await Roster.create({
    user,
    name,
    students: studentDocs,
  });

  res.send('Roster posted successfully');
};

const getRoster = async (req: Request, res: Response) => {
  const { rosterId } = req.params;

  const roster = await Roster.findById(rosterId);

  res.send(roster);
};

const putRoster = async (req: Request, res: Response) => {
  const { rosterId } = req.params;
  const newProperties = req.body;

  await Roster.findOneAndUpdate({ _id: rosterId }, { ...newProperties }).exec();

  res.send('Roster updated successfully');
};

const deleteRoster = async (req: Request, res: Response) => {
  const { rosterId } = req.params;

  await Roster.findOneAndRemove({ _id: rosterId }).exec();

  res.send('Roster deleted successfully');
};

export default { getUserRosters, postRoster, getRoster, putRoster, deleteRoster };
