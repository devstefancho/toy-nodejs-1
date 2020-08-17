const express = require("express");

const blogController = require("../controllers/blogController");

const router = express.Router();
router.get("/", blogController.renderBlogList);
router.get("/:id", blogController.renderSingleBlogPage);
router.delete("/:id", blogController.deleteSingleBlog);

module.exports = router;
