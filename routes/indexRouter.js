const messages = [
  {
    text: "Hi there!",
    user: "Madhav",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Shreya",
    added: new Date(),
  },
];

const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages });
});

module.exports = { indexRouter, messages };
