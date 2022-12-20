import { Schema, model } from 'mongoose';
import { studentSchema } from './Student';

const hallpassSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  student: { type: studentSchema, required: true },
  origin: {
    type: String,
    required: true,
  },
  destination: { type: String, required: true },
  timer: { type: Number, required: true },
  state: { type: String, required: true },
});

export default model('Hallpass', hallpassSchema);
