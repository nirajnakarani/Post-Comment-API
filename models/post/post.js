// ----- mongoose -----

var mongoose = require("mongoose");


// ----- image path -----

var imgPath = "/uploads/post"


// ----- multer -----

var multer = require("multer")


// ----- path -----

var path = require("path")


// ----- post schema -----

var postSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    postImg: {
        required: true,
        type: String
    },
    commentId: {
        type: Array,
        ref: "commentdata"
    }
})


// ----- img -----

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../..", imgPath))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now())
    }
})


// ----- single img -----

postSchema.statics.uploadImg = multer({ storage: storage }).single("postImg");


// ----- export post img path -----

postSchema.statics.imgPath = imgPath;


// ----- post table -----

var post = mongoose.model("postdata", postSchema);


// ----- export -----

module.exports = post;