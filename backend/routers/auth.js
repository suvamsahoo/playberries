let express = require("express");
const router = express.Router();

//import controller
const {
  signupp,
  accountActivation,
  signinn,
  forgotPassword,
  resetPassword,
  googleLogin,
} = require("../controllers/auth");

//import validators
const  {
  userSigninValidator,
  userSignupValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");

const { runValidation }= require("../validators/index");

router.post("/signupp", userSignupValidator, runValidation, signupp);
router.post("/account-activation", accountActivation);
router.post("/signinn", userSigninValidator, runValidation, signinn);

//forgot and reset password-:
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

// google-:
router.post("/google-login", googleLogin);

module.exports = router;
