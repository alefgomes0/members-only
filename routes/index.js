const express = require("express");
const router = express.Router();
const messageBoard = require("../controllers/messageBoardController");

router.get("/", messageBoard.index);



module.exports = router
