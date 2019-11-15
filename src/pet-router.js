const express = require('express');
const petRouter = express.Router();
const petStore = require('./pet-store');
const Service = require('./service');

petRouter
  .route('/')
  .get((req, res, next) => {
    const nextAvailable = Service.peek(petStore);
    res.json(nextAvailable);
  })
  .delete((req, res, next) => {
    petStore.dequeue();
    res.status(204).end();
  });

module.exports = petRouter;