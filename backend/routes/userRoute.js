const express = require('express');
const {
  authUser,
  userProfile,
  updateProfile,
} = require('../controllers/user.controller.js');
const { protectRoute } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', authUser);
router.get('/profile', protectRoute, userProfile);

// router.get('/:id', protectRoute, getProductById);

module.exports = router;
