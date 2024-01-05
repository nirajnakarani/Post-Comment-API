// ----- post model -----

var post = require("../../../../models/post/post")


// ----- comment model -----

var comment = require("../../../../models/comment/comment")


// ----- add comment -----

module.exports.add_comment = async (req, res) => {
    try {

        req.body.postId = req.query.id;

        var postData = await post.findById(req.query.id);


        var insert = await comment.create(req.body);
        postData.commentId.push(insert.id)
        if (insert) {
            await post.findByIdAndUpdate(req.query.id, { commentId: postData.commentId })
            return res.status(200).json({ msg: "comment added", status: 1 })
        }
        else {
            return res.status(400).json({ msg: "comment not added", status: 0 })
        }

    }
    catch (err) {
        return res.status(400).json({ msg: err, status: 0 })
    }
}