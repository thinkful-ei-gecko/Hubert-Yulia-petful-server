const express = require('express');
const personRouter = express.Router();
const personStore = require('./person-store');
const Service = require('./service');
const jsonBodyParser = express.json();

personRouter
  .route('/')
  .get((req, res, next) => {
    const nextInLine = Service.peek(personStore);
    res.json(nextInLine);
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
    res.status(201).json(`${full_name} added to waiting list`);
  });

module.exports = personRouter;