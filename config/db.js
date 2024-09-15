import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoURI);
    console.log(`mongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error:333 ${err.message}`);
    // Exit proccess with failure
    process.exit(1);
  }
};

export default connectDB;
