var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/",controller.visitor);
router.post("/register",controller.register); 
//만들어져 있는 함수를 여기에 적어야 한다. 그렇지 않으면 오류가 뜸

router.delete("/delete",controller.delete) //delete요청을 받는 router

router.get("/get_visitor",controller.get_visitor_by_id)

router.patch("/update",controller.update_visitor)

module.exports = router; 
                        