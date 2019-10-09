const express = require('express');
const router = express.Router();
const {
  getPostByUserId,
  makePostbyUserId,
  deletePost
} = require('../db/queries/postsQueries');


router.get('/:user_id',getPostByUserId);
router.post('/', makePostbyUserId);
router.delete('/:post_id', deletePost);

module.exports = router;