//renderBlogList, renderSingleBlogPage, deleteSingleBlog
//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const mongoose = require("mongoose");
const Blog = require("../models/blog");

const blogCreateSubmit = (req, res) => {
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
};

const renderBlogListRedirect = (req, res) => {
  res.redirect("/blogs");
};

const blogAbout = (req, res) => {
  res.render("about", { title: "ABOUT" });
};

const blogCreate = (req, res) => {
  res.render("create");
};

const renderBlogList = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderSingleBlogPage = (req, res) => {
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
  } else {
    res.render("error_404", { title: "404 Not Found" });
  }
};

const deleteSingleBlog = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

const error404 = (req, res) => {
  res.render("error_404", { title: "404 Not Found" });
};

module.exports = {
  blogCreateSubmit,
  renderBlogListRedirect,
  blogAbout,
  blogCreate,
  renderBlogList,
  renderSingleBlogPage,
  deleteSingleBlog,
  error404,
};
