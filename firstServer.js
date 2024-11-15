require("dotenv").config()
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/usman", (req, res) => {
  res.send("<h1>Usman will be a Billionare in 2025 INSHAALLAH (Ameen)</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Hello About page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
