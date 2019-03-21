const router = require('express').Router();
const Drivers = require('./user-model.js');
const restricted = require('../auth/restricted-middleware.js');

const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

//*************returns a list of all drivers*************/

router.get('/', restricted, (req, res) => {
  Drivers.find()
    .then(drivers => {
      res.json(drivers);
    })
    .catch(err => res.send(err));
});

//***********get driver by indevidual id***************/

router.get('/:id', restricted, (req, res) => {
  db('drivers')
  .where({id: req.params.id})
  .first()
  .then(driver => {
    res.status(200).json(driver)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

//************add a new driver************/

router.post('/', restricted,(req, res) => {
  db('drivers')
  .insert(req.body)
  .then(([id]) => {

    db('drivers')
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

//***********update/edit a driver profile**************/

router.put('/:id', restricted, (req, res) => {
    db('drivers')
    .where({ id: req.params.id })
    .update(req.body)
    .then(response => {
      if(response > 0) {
        db('drivers')
        .where({ id: req.params.id })
        .first()
        .then(response => {
          res.status(200).json(response)
        })
      } else {
        res.status(404).json({ message: 'driver not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//*************delete a driver profile**************/
router.delete('/:id', restricted,(req, res) => {
  const id = req.params.id
  db('drivers')
  db('drivers')
  .where({ id })
  .del()
  .then(response => {
    if(response > 0) {
      res.status(204).end()
    } else {
      res.status(404).json({ message: 'That driver could not be found' })
    }
  })
  .catch(err => {
    res.status(500).json(err)
  })
});


module.exports = router;