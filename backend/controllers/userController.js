const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    //generate a token
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 10000,
    });
    //save the user
    res
      .status(200)
      .send({ newUser, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    res.send("can not save this user");
    console.log(error);
  }
};
