const express = require("express");
const router = express.Router();
require("passport");
const messageBoard = require("../controllers/messageBoardController");
const register = require("../controllers/registerController");
const login = require("../controllers/loginController");
const logout = require("../controllers/logoutController");
const newMessage = require("../controllers/newMessageController");
const passport = require("passport");
const isAuth = require("./authMiddleware").isAuth;

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

router.get("/new-message", isAuth, newMessage.get);

router.get("/logout", logout.get);

module.exports = router;
