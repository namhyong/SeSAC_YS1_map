var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.first);
router.post("/login",controller.login); 
router.get("/signin",controller.signin);
router.post("/update",controller.insert_user)


module.exports = router; 
                        