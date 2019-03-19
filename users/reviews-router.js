const router = require('express').Router();

const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

//*************returns a list of all reviews*************/

router.get('/', (req, res) => {
    db('reviews')
    .then(reviews => {
      res.status(200).json(reviews)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;