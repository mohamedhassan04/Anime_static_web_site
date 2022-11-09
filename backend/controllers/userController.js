const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//Register User
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(400).send({ message: "email already exist" });
    }

    //hash password
    const saltRounds = 10;
    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    await newUser.save();

    res.send({
      newUser,
      message: "user is saved with success",
    });
  } catch (error) {
    res.send("can not save this user");
    console.log(error);
  }
};
