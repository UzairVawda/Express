const session = require("../Util/session.util");
const User = require("../Models/User.model");

function getLogin(req, res, next) {
  res.status(200).render("auth/login");
}

function getSignup(req, res, next) {
  const flashData = session.fromSession(req);
	console.log(flashData)
  res.status(200).render("auth/signup");
}

async function signupUser(req, res, next) {
  const body = req.body;
  const newUser = new User(
    body.userName,
    body.userEmail,
    body.userPassword,
    body.authorCheck,
    body.viewerCheck
  );
  let userExistFlag;

  try {
    userExistFlag = await newUser.userExistCheck();
  } catch (error) {
    console.log("failed to create user");
    next(error);
    return;
  }

  if (userExistFlag === true) {
    session.toSession(req, { error: "User Already Exists" }, function () {
      res.redirect("/signup");
    });
    return;
  }

  try {
    await newUser.createUser();
    res.redirect("/blogs");
  } catch (error) {
    console.log("failed to create user");
    next(error);
    return;
  }
}

module.exports = {
  getLogin: getLogin,
  getSignup: getSignup,
  SignupUser: signupUser,
};
