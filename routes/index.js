const express = require("express");
const router = express.Router();
const messageBoard = require("../controllers/messageBoardController");
const register = require("../controllers/registerController");

router.get("/", messageBoard.index);
router.get("/register", register.get);

module.exports = router;
