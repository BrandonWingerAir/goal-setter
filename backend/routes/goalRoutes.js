const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET goals' });
});

router.post('/', (req, res) => {
    res.json({ message: 'SET goal' });
});

router.put('/:id', (req, res) => {
    res.json({ message: `UPDATE goal ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = router;