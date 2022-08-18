const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.render("home.html");
});

app.listen(8000, () => {
  "Listening to port 3000";
});
