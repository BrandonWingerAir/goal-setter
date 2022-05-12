// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' });
};

// @desc    Login user
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User' });
};

// @desc    Get user data
// @route   GET /api/users/profile
// @access  Public
const getUser = (req, res) => {
    res.json({ message: 'User Profile' });
};

module.exports = {
    registerUser,
    loginUser,
    getUser
};