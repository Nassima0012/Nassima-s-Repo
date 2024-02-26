const router = require("express").Router()
const { login, register,protected } = require("../controler/controller")
const {validate,verifyToken} = require("../middlewear/middle")



router.post("/login", validate(), login).post("/register", validate(), register).get("/protected",verifyToken,protected);

module.exports = router