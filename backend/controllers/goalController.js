// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'GET goals' });
};

// @desc    Create goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
    res.json({ message: 'CREATE goal' });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.json({ message: `UPDATE goal ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.json({ message: `DELETE goal ${req.params.id}` });
};

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};