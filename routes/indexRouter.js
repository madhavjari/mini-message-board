const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Madhav",
    added: new Date(),
  },
  {
    id: 2,
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
