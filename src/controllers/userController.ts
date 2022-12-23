import { Request, Response } from 'express';
import Roster from '../model/Roster';
import Student from '../model/User';

const getUserData = async (req: Request, res: Response) => {
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

export default { getUserData };
