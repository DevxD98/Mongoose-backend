import mongoose from 'mongoose';

async function mongoConfig() {
  return mongoose.connect('mongodb://127.0.0.1:27017/dex').then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });  
}

export default mongoConfig;