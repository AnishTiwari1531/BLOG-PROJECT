const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const commonMiddleware = require("../middleware/auth")

//---------------------------------------------------------------//

router.post("/authors", authorController.createAuthor)

router.post("/blogs",commonMiddleware.tokenChecker, blogController.createBlog)

router.get("/blogs", commonMiddleware.tokenChecker, blogController.getBlogs)

router.put("/blogs/:blogId", commonMiddleware.tokenChecker, blogController.update)

router.delete("/blogs/:blogId", commonMiddleware.tokenChecker, blogController.deleteByBlogId)

router.delete("/blogs", commonMiddleware.tokenChecker, blogController.deleteByQuery)

router.post("/login", authorController.login)

module.exports = router;


//---------------------------------------------------------------//
