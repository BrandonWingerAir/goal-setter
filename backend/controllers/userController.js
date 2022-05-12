const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields')
    }

    // Check if user exists
    const userExist = await User.findOne({email});

    if (userExist) {
        res.status(400);
        throw new Error('User already exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

    res.json({ message: 'Register User' });
});

// @desc    Login user
// @route   POST /api/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' });
});

// @desc    Get user data
// @route   GET /api/users/profile
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User Profile' });
});

module.exports = {
    registerUser,
    loginUser,
    getUser
};