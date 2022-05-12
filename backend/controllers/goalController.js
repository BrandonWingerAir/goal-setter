const asyncHandler = require('express-async-handler');

const GoalModel = require('../models/goalModel');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await GoalModel.find();
    res.status(200).json(goals);
});

// @desc    Create goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a goal')
    }

    const goal = await GoalModel.create({
        text: req.body.text
    });

    res.json(goal);
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