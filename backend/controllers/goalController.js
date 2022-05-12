const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'GET goals' });
});

// @desc    Create goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a goal')
    }

    res.json({ message: 'CREATE goal' });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.json({ message: `UPDATE goal ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};