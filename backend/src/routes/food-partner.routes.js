const express = require('express');
const foodController = require('../controllers/food-partner.controller');
const { authFoodPartnerMiddleware } = require('../middlewares/auth.middleware'); // ✅ correct import

const router = express.Router();

// GET /api/food/food-partner/:id
router.get(
  '/food-partner/:id',
  authFoodPartnerMiddleware, // ✅ this middleware is for food partners
  foodController.getFoodPartnerById
);

module.exports = router;
