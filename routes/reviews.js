const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// Create Reviews
router.post('/games/:id/reviews', reviewsCtrl.create);

// Delete Reviews
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;