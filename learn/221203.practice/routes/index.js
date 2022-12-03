var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.first);
router.post("/login",controller.login); 


module.exports = router; 
                        