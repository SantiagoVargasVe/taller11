const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Debes estar loggeado para ver el contenido.");
};

exports.userBoard = async (req, res) => {
  const filter = {};
  const all = await User.find(filter).exec();
  res.status(200).send(all);
};

exports.adminBoard = async (req, res) => {
  const filter = {};
  const all = await User.find(filter).exec();
  res.status(200).send(all);
};

exports.moderatorBoard = async (req, res) => {
  const filter = {};
  const all = await User.find(filter).exec();
  res.status(200).send(all);
};

exports.addComment = async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).exec();
  console.log(user);
  user.comments.push(req.body.comment);
  await user.save();
  const useract = await User.find({ username: req.body.username }).exec();
  res.status(200).send(useract);
};
