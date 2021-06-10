const User = require('../models/users.model');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');

/**
 * @description Auth User & get Token
 * @route POST /api/users/login
 * @access Public
 */
exports.authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // res.send({ email, password });
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password, user.password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});

/**
 * @description Get User Profile
 * @route GET /api/users/profile
 * @access Private
 */
exports.userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('user not found');
  } else {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }

  res.send('success');
});

/**
 * @description update User Profile
 * @route PUT /api/users/profile
 * @access Private
 */
exports.updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(401);
    throw new Error('user not found');
  }

  res.send('success');
});
