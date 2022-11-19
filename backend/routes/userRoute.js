const express = require("express");
const { registerUser } = require("../controllers/userController");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

const router = express.Router();

router.route("/register").post(registerUser);

module.exports = router;
