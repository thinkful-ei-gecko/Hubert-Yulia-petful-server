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
    let removed = petStore.dequeue();
    res.status(204).json(removed);
  });

petRouter
  .route('/list')
  .get((req, res, next) => {
    let petList = Service.getAllPeople(petStore);
    return res.json(petList); 
  });

module.exports = petRouter;