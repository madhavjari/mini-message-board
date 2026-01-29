const express = require("express");

const { messages } = require("./indexRouter");

const messagesRouter = express.Router();

messagesRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
messagesRouter.post("/new", (req, res) => {
  const userData = req.body;
  console.log("recieved data", userData);
  messages.push({
    text: userData.title,
    user: userData.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = messagesRouter;
