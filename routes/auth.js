const express = require("express")
const userContoller=require("../controllers/users");
const router= express.Router();

router.post("/register",userContoller.register);
router.post("/login",userContoller.login);
router.post("/display",userContoller.display);
module.exports=router;