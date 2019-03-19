const router = require('express').Router();

const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

//*************returns a list of all locations*************/

router.get('/', (req, res) => {
    db('locations')
    .then(locations => {
      res.status(200).json(locations)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;