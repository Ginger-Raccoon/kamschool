const User = require('../models/user');

module.exports.userData = (req, res, next) => {
  const { name, email, telephone } = req.body;
  User.create({ name, email, telephone})

  .then((data) => res.send ({data: data}))
  .catch((err) => {
    next(err);
  })
}