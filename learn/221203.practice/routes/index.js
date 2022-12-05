var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.first);
router.post("/afterlogin",controller.login); 
router.get("/signin",controller.signin);
router.post("/insert_user",controller.insert_user)
router.patch("/modify_user",controller.modify_user)
router.delete("/delete_user",controller.delete_user)



module.exports = router; 
                        