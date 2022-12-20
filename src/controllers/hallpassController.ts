import { Request, Response } from 'express';
import Hallpass from '../model/Hallpass';
import Student from '../model/Student';

const getHallpasses = async (req: Request, res: Response) => {
  const hallpasses = await Hallpass.find().exec();
  res.send(hallpasses);
};

const postHallpass = async (req: Request, res: Response) => {
  const { date, studentId, origin, destination, timer, state } = req.body;

  const student = await Student.findById(studentId).exec();

  await Hallpass.create({
    date,
    student,
    origin,
    destination,
    timer,
    state,
  });

  res.send('Hallpass posted successfully');
};

export { getHallpasses, postHallpass };
