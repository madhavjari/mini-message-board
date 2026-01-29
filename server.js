const express = require("express");
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");
const app = express();

const PORT = 3000;
app.set("view engine", "ejs");

app.use(indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
