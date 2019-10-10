const express = require("express")
const router = express.Router()
const {getAllThreads, getThreadsByUserId, deleteThread, createThreadById} = require("../db/queries/threadsQueries.js")


router.get("/", getAllThreads);
router.get("/:id", getThreadsByUserId)
router.delete("/:id", deleteThread)
router.post("/:id", createThreadById)



module.exports = router