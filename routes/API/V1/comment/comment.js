// ----- express -----

var express = require("express");


// ----- routes -----

var routes = express.Router()


// ----- comment model -----

var comment = require("../../../../models/comment/comment")


// ----- comment controller -----

var commentController = require("../../../../controllers/API/V1/comment/commentController")


// ----- add comment -----

routes.put("/add_comment", commentController.add_comment)


// ----- export -----

module.exports = routes;