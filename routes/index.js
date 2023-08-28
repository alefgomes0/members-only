const express = require("express");
const router = express.Router();
const messageBoard = require("../controllers/messageBoardController");
const register = require("../controllers/registerController");
const login = require("../controllers/loginController")

router.get("/", messageBoard.index);

router.get("/register", register.get);
router.post("/register", register.post);

router.get("/login", login.get)

module.exports = router;
