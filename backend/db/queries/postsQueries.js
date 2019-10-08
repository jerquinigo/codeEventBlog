const { db } = require('.');

const getPostByUserId = ( req, res, next) => {
    db.any('SELECT posts.id AS post_id , threads_id, user_id,username, profile_pic, posts_code, posts_comment FROM posts JOIN users ON users.id = posts.user_id WHERE user_id = $1')
    .then(posts => {
        res.status(200).json({
            status: "success",
			posts:posts,
			message: "got all the threads"
        })
    })
    .catch(err =>{
        console.log(err);
		return next(err);
     })
}

module.exports = {
    getPostByUserId
}