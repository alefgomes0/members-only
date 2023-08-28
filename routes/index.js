const express = require("express");
const router = express.Router();
require("passport");
const messageBoard = require("../controllers/messageBoardController");
const register = require("../controllers/registerController");
const login = require("../controllers/loginController");
const logout = require("../controllers/logoutController")
const passport = require("passport");

router.get("/", messageBoard.index);

router.get("/register", register.get);
router.post("/register", register.post);

router.get("/login", login.get);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/logout", logout.get)

module.exports = router;
