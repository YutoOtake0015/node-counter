const express = require("express");
const app = express();
const port = 3000;

let COUNT = 1;

// routing
app.get("/", (req, res) => {
  res.send(`あなたは${COUNT}人目のお客様です`);
  COUNT++;
});
app.get("/reset", (req, res) => {
  res.send("カウントをリセットしました");
  COUNT = 1;
});

// start server
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
