const router = require('express').Router();

const restricted = require('../auth/restricted-middleware.js');

const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)




//************add a new user************/

router.post('/', restricted, (req, res) => {
  db('users')
  .insert(req.body)
  .then(([id]) => {

    db('users')
    .where({ id })
    .first()
    .then(response => {
      res.status(200).json(response);
    })
  })
  .catch(err => {
    res.status(500).json(err);
  })
});


  
  
  module.exports = router;