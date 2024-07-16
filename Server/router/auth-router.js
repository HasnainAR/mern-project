const express = require("express");
const router = express.Router();
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const authcontrollers = require("../controllers/auth-controller")
const validate = require("../middlewares/validate-middleware")

//Home
router.route("/").get(authcontrollers.home);
//Register
router.route("/register").post(validate(signupSchema),authcontrollers.register);
//Login
router.route("/login").post(validate(loginSchema),authcontrollers.login);








module.exports = router;