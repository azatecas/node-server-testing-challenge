  
const router = require('express').Router();
const Char = require('./characters-model.js');

const db = require('../data/db-config');

router.get("/", (req, res) => {
    Char
        .find()
        .then(user => {
            res.status(200).json({currentUsers: user});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.post('/char', (req, res) => {
    // implement registration
    const body = req.body;
      Char
      .add(body)
      .then(user => {
          res.status(201).json({user: user, hello: body.username});
      })
      .catch(err => res.status(500).json({errorMessage: err.message}))
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db('characters').where({ id }).del()
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });
module.exports = router;