const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController.js');

// Define routes for restaurant-related actions
router.post('/', restaurantController.createRestaurant);
router.get('/', restaurantController.getAllRestaurants);
router.get('/:restaurantId', restaurantController.getRestaurantById);
router.put('/:restaurantId', restaurantController.updateRestaurant);
router.delete('/:restaurantId', restaurantController.deleteRestaurant);

module.exports = router;
