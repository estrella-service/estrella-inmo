import mongoose from 'mongoose';
import 'dotenv/config';

const mongoDB =
  'mongodb+srv://estrellaservicecalpe:rGVwWalPBu91YBs7@estrella.gg9rqcg.mongodb.net/estrella?retryWrites=true&w=majority';

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log('Database: Connected');
  } catch (error) {
    console.log('Error: ', error);
  }
};
