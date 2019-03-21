const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js');

const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

//*************returns a list of all locations*************/

router.get('/', restricted, (req, res) => {
    db('locations')
    .then(locations => {
      res.status(200).json(locations)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;