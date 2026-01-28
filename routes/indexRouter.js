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

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index"));

module.exports = indexRouter;
