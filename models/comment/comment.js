// ----- mongoose -----

var mongoose = require("mongoose");


// ----- comment schema -----

var commentSchema = mongoose.Schema({
    comment: {
        required: true,
        type: String
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "postdata",
        require: true
    }
})


// ----- comment table -----

var comment = mongoose.model("commentdata", commentSchema);


// ----- export -----

module.exports = comment;