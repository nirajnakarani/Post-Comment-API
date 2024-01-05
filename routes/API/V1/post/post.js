// ----- express -----

var express = require("express");


// ----- routes -----

var routes = express.Router()


// ----- post model -----

var post = require("../../../../models/post/post")


// ----- post controller -----

var postController = require("../../../../controllers/API/V1/post/postController")


// ----- add post -----

routes.post("/add_post", post.uploadImg, postController.add_post)


// ----- view comment -----

routes.get("/view_comment", postController.view_comment)


// ----- comment -----

routes.use("/comment", require("../comment/comment"))


// ----- export -----

module.exports = routes;