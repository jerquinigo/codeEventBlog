const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostByUserId,
  makePostbyUserId,
  deletePost
} = require('../db/queries/postsQueries');

router.get('/', getAllPosts)
router.get('/:user_id', getPostByUserId);
router.post('/', makePostbyUserId);
router.delete('/:post_id', deletePost);

module.exports = router;