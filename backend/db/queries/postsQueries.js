const { db } = require('.');

const getPostByUserId = ( req, res, next) => {
    db.one('SELECT id, threads_id, user_id, posts_code, posts_comment FROM posts where user_id =$1')
}

module.exports = {
    getPostByUserId
}