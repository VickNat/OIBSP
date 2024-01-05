import mongoose from 'mongoose'
import { config } from 'dotenv';

config()

const uri = process.env.DB_CONNECTION;

mongoose.connect(uri)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
