const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("object", process.env.DATABASE_URI);

  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
