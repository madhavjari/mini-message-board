const express = require("express");

const messagesRouter = express.Router();

messagesRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

module.exports = messagesRouter;
