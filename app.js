const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const blogController = require("./controllers/blogController");

const app = express();
dotenv.config();
// connect to mongoDB
const dbURI = process.env.dbURI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => {
    console.log(err);
  });

//set template engine as ejs
app.set("view engine", "ejs");
//HTTP request logger middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/about", blogController.blogAbout);
app.get("/create", blogController.blogCreate);
app.get("/", blogController.renderBlogListRedirect);
app.post("/", blogController.blogCreateSubmit);

app.get("/blogs", blogController.renderBlogList);
app.get("/blogs/:id", blogController.renderSingleBlogPage);
app.delete("/blogs/:id", blogController.deleteSingleBlog);

app.use(blogController.error404);
