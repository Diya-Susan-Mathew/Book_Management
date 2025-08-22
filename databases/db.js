const mongoose = require('mongoose');
const connectDB = async() => {
  try{
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  }catch (error){
    console.error("Connection Failed");
    process.exit(1);
  }
};
module.exports = connectDB;