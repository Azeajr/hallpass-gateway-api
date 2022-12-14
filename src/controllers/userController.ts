import { Request, Response } from 'express';
import db from '../config/db';

const getUserData = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const rosterNames: any[] = await db.rosterNames.findAll({
    include: [
      { model: db.users, required: true },
      {
        model: db.rosters,
        required: true,
        include: { model: db.students, required: true },
      },
    ],
    where: {
      '$user.id$': `${userId}`,
    },
  });

  const userData = rosterNames.map((roster) => {
    return {
      courseTitle: roster.rosterName,
      students: roster.rosters.map((e: any) => {
        return { firstName: e.student.firstName, lastName: e.student.lastName };
      }),
    };
  });

  res.send(userData);
};

export default { getUserData };
