const express = require("express")
const router = express.Router()
const {getAllThreads} = require("../db/queries/threadsQueries.js")


router.get("/", getAllThreads);



module.exports = router