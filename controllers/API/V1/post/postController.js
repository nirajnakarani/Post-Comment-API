// ----- post model -----

var post = require("../../../../models/post/post")


// ----- comment model -----

var comment = require("../../../../models/comment/comment")


// ----- add post -----

module.exports.add_post = async (req, res) => {
    try {
        var imgPath = "";
        if (req.file) {
            imgPath = post.imgPath + "/" + req.file.filename;
        }
        req.body.postImg = imgPath;

        var insert = await post.create(req.body);
        if (insert) {
            return res.status(200).json({ msg: "data insert", status: 1 })

        }
        else {
            return res.status(400).json({ msg: "data not insert", status: 0 })
        }

    }
    catch (err) {
        return res.status(400).json({ msg: err, status: 0 })
    }
}


// ----- view post -----

module.exports.view_comment = async (req, res) => {
    try {
        var commentData = await comment.find({ postId: req.query.id })
        if (commentData) {

            return res.status(200).json({ msg: "here comment", status: 1, commentCounts:commentData.length, comments: commentData })
        }
        else {
            return res.status(400).json({ msg: "comment not found", status: 0 })
        }
    }
    catch (err) {
        return res.status(400).json({ msg: err, status: 0 })
    }
}