const express = require("express")
const router = express.Router()
const {getAllThreads, getThreadsByUserId, deleteThread} = require("../db/queries/threadsQueries.js")


router.get("/", getAllThreads);
router.get("/:id", getThreadsByUserId)
router.delete("/:id", deleteThread)



module.exports = router