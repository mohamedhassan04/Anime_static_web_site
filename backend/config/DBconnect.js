const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Data Base is connected successfully");
  } catch (error) {
    console.log("data base is not connected");
  }
};

module.exports = DBconnect;
