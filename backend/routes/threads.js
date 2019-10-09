const express = require("express")
const router = express.Router()
const {getAllThreads} = require("../db/queries/threadsQueries.js")


router.get("/", getAllThreads);
router.get("/:id", getThreadsByUserId)



module.exports = router