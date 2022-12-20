import { Schema, model } from 'mongoose';
import { studentSchema } from './Student';
import { userSchema } from './User';

const rosterSchema = new Schema({
  user: { type: userSchema, required: true },
  name: { type: String, required: true },
  students: [{ type: studentSchema, required: true }],
});

export default model('Roster', rosterSchema);
