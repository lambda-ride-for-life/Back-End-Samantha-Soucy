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


//******all reviews for a driver with the specified id*****/


router.get('/:id/reviews', restricted, (req, res) => {
    const {id} = req.params
    db('reviews')
    .where("driver_id", id)
        .then(names => {
            if (names.length) {
                res.json(names)
            } else {
                res.status(400).json({ message: "This driver does not have any reviews" })
            }
    })
    .catch(() => {
        res.status(500).json({ message: "Could not find reviews in this driver" })
    })
});


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



//************user can add a new review************/

router.post('/', restricted, (req, res) => {
    db('reviews')
    .insert(req.body)
    .then(([id]) => {
  
      db('reviews')
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

//***********update/edit a review****************/

router.put('/:id', restricted, (req, res) => {
    db('reviews')
    .where({ id: req.params.id })
    .update(req.body)
    .then(response => {
      if(response > 0) {
        db('reviews')
        .where({ id: req.params.id })
        .first()
        .then(response => {
          res.status(200).json(response)
        })
      } else {
        res.status(404).json({ message: 'review not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//*************delete a review**************/
router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id
    db('reviews')
    db('reviews')
    .where({ id })
    .del()
    .then(response => {
      if(response > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'That review could not be found' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });


  
  
  module.exports = router;