const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();

const PORT = 3000;

app.use("/", indexRouter);

app.set("view engine", "ejs");

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
