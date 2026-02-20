const express = require("express");
const db = require("../db/queries");

const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllUsernames();
  res.render("index", { title: "Home", messages: messages });
});

module.exports = { indexRouter };
