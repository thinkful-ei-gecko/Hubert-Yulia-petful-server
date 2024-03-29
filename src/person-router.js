const express = require('express');
const personRouter = express.Router();
const personStore = require('./person-store');
const Service = require('./service');
const jsonBodyParser = express.json();

personRouter
  .route('/')
  .get((req, res, next) => {
    const nextInLine = Service.peek(personStore);
    return res.json(nextInLine);
  })
  .post(jsonBodyParser, (req, res, next) => {
    let { full_name } = req.body;
    if(!full_name) {
      return res.status(400)
        .json({
          error: {message: 'Missing \'full name\' in request body'}
        });
    }
    personStore.enqueue(full_name);
    res.status(201).send(`${full_name} added to waiting list`);
  })
  .delete((req, res, next) => {
    let removed = personStore.dequeue();
    res.status(204).json(removed);
  });

personRouter
  .route('/list')
  .get((req, res, next) => {
    let personList = Service.getAllPeople(personStore);
    return res.json(personList); 
  });


module.exports = personRouter;