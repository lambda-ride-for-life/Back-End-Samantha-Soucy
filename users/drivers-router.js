const router = require('express').Router();


const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)



//***********update/edit a driver**************/

router.put('/:id', (req, res) => {
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

//*************delete a driver**************/
router.delete('/:id', (req, res) => {
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