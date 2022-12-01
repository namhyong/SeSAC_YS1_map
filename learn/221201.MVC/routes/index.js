var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/",controller.main); //router에 대한 정의를 이 폴더에서 해줌
router.get("/test",controller.test);

router.post("/postForm",controller.post);


router.get("/axios",controller.axios);  //과제 get

router.post("/axiospost",controller.axiospost);

router.post("/axiospost2",controller.axiospost2)//과제 post 



module.exports = router; //최상위 index.js에서 이 파일을 사용하기 위해서 이 router파일을 module.export해주어야
                         // 최상위 index.js에서 require하여 사용 할 수 있다. 