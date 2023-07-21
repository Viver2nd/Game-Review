const Game = require('../models/game');

module.exports = {
  index,
  all,
  new: newGame,
  create,
  show,
  edit,
  update
};

// Game Update Functionality 
async function update(req, res) {
  await Game.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/games/${req.params.id}`)
}

// Game Edit Functionality 
async function edit(req, res) {
  const game = await Game.findById(req.params.id)
  res.render('games/edit', { title: 'Edit Game', game });
}

// Home Page
async function index(req, res) {
  try {
    const games = await Game.find({});
    console.log(games)
    res.render('games/index', { title: 'All Games', games });
  } catch(err) {
    console.log(err)
  }
}

// Show Individual Game
async function show(req, res) {
  const game = await Game.findById(req.params.id)
  res.render('games/show', { title: 'Game Detail', game });
}

// All Game Page
async function all(req, res) {
    try {
        const games = await Game.find({});
        console.log(games)
        res.render('games/all', { title: 'All Games', games });
    } catch(err) {
        console.log(err)
    }
}

// New Game Page
function newGame(req, res) {
    res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

// Game Creation Functionality 
async function create(req, res) {
  try {
    const game = await Game.create(req.body);
    res.redirect(`/games/${game._id}`);
  } catch (err) {
    console.log(err);
    res.render('games/new', { errorMsg: err.message });
  }
}
