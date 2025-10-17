const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const authFoodPartnerMiddleware = require("../middlewares/auth.middleware");
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})


// .authFoodPartnerMiddleware)
router.post("/", authFoodPartnerMiddleware,
    upload.single("video"), 
    foodController.createFood)

module.exports = router;
