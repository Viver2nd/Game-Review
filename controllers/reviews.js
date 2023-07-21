const Game = require('../models/game');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res) {
  const game = await Game.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  if (!game) return res.redirect('/games');
  game.reviews.remove(req.params.id);
  await game.save();
  res.redirect(`/games/${game._id}`);
}


async function create(req, res) {
    const game = await Game.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    game.reviews.push(req.body);
    try {
      await game.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/games/${game._id}`);
  }