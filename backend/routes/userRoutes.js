const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Define routes for user-related actions
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
