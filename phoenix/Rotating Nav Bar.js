const express = require("express");
const app = express();

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

app.listen(8000, () => {
  "Listening to port 3000";
});
