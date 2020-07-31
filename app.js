const express = require("express");
const morgan = require("morgan");

const app = express();

app.listen(3000);
//set template engine as ejs
app.set("view engine", "ejs");
//HTTP request logger middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", { title: "HOME" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

app.use((req, res) => {
  res.render("error_404", { title: "404 Not Found" });
});
