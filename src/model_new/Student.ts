import { Schema, model } from 'mongoose';

export const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export default model('Student', studentSchema);
