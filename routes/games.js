const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET Landing/Home Page
router.get('/', ensureLoggedIn, gamesCtrl.index);

// GET Game List Page
router.get('/all', ensureLoggedIn, gamesCtrl.all);

// Game Creation Page
router.get('/new', ensureLoggedIn, gamesCtrl.new);

// Game Creation Function
router.post('/', ensureLoggedIn, gamesCtrl.create);

// View Specific Game Info Page
router.get('/:id', ensureLoggedIn, gamesCtrl.show);

// Game Edit Page
router.get('/:id/edit', ensureLoggedIn, gamesCtrl.edit);

// Update Game
router.put('/:id', ensureLoggedIn, gamesCtrl.update);

module.exports = router;