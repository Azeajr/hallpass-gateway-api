import { Schema, model } from 'mongoose';

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model('Location', locationSchema);
