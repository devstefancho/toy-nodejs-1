const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Blog = require("./models/blog");

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

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});
app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log(`Data saved completely : ${result}`);
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
      console.log("save data");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//single post
app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  console.log(`send id : ${id}`);
  //check id validation
  if (mongoose.isValidObjectId(id)) {
    Blog.findById(id)
      .then((result) => {
        res.render("blog", { title: "Single Post", blog: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.use((req, res) => {
  res.render("error_404", { title: "404 Not Found" });
});
