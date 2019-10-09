const { db } = require('.');

const getPostByUserId = ( req, res, next) => {
    let userId = +req.params.user_id;
    db.any('SELECT posts.id AS post_id , threads_id, user_id,username, profile_pic, posts_code, posts_comment FROM posts JOIN users ON users.id = posts.user_id WHERE user_id = $1',userId)
    .then(posts => {
        res.status(200).json({
            status: "success",
			posts:posts,
			message: `got posts from user id: ${userId}`
        })
    })
    .catch(err => {
        console.log(err);
		return next(err);
     })
}
const makePostbyUserId = (req, res, next) => {
    db.none('INSERT INTO posts (threads_id, user_id, posts_code, posts_comment) VALUES(${threads_id},${user_id},${posts_code}, ${posts_comment}) RETURNING id', {
        threads_id: req.body.threads_id,
        user_id: req.body.user_id,
        posts_code: req.body.posts_code,
        posts_comment: req.body.posts_comment,
      })
      .then( resp => {
        res.status(200).json({
          status: 'success',
          post_id:resp.id,
          message: 'user subscribed to a goal and added activity'
        })
      })
      .catch(err => {
          console.log(err)
          return next(err)
      })
}
const deletePost = (req, res, next) => {
    const postId = +req.params.post_id
    db.none('DELETE FROM posts WHERE id=$1', postId)
      .then(() => {
        res.status(200).json({
          message: 'You have deleted your post'
        })
      })
      .catch(err => {
        console.log(err)
        return next(err)
      })
  }

module.exports = {
    getPostByUserId,
    makePostbyUserId,
    deletePost
}