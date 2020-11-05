const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("../app/src/views/index");
});

app.listen(port, () => {
  console.log(`Sudoku game running at http://localhost:${port}`);
});
