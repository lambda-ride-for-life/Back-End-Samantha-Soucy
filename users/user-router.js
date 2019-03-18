const router = require('express').Router();
const Users = require('../users/user-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Users.find()
      .then(users => {
        res.json({ users, decodedToken: req.decodedJwt });
      })
      .catch(err => res.send(err));
  });
  
  
  module.exports = router;