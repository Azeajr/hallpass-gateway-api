import { Schema, model, Types } from 'mongoose';

const rosterSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'user' },
  name: String,
  students: [{ type: Types.ObjectId, ref: 'student' }],
});

export default model('Roster', rosterSchema);
