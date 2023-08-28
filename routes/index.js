const express = require("express");
const router = express.Router();
const messageBoard = require("../controllers/messageBoardController");
const register = require("../controllers/registerController");
const signUp = require("../controllers/signUpController")

router.get("/", messageBoard.index);

router.get("/register", register.get);
router.post("/register", register.post);

router.get("/sign-up", signUp.get)

module.exports = router;
