const express = require("express")
const router = express.Router()
const {createUser} = require("../db/queries/usersQueries.js")


router.post("/signUp", createUser)



module.exports = router;