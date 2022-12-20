import { connect, set } from 'mongoose';

async function connectDB() {
  try {
    set('strictQuery', false);
    connect(process.env.DATABASE_URI!);
  } catch (err) {
    console.log(err);
  }
}
export default connectDB;
