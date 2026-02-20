const express = require("express");

const db = require("../db/queries");

const messagesRouter = express.Router();

messagesRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
messagesRouter.post("/new", async (req, res) => {
  const userData = await req.body;
  userData["time"] = new Date();
  await db.insertUsername(userData);
  res.redirect("/");
});

module.exports = messagesRouter;
