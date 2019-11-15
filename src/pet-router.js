const express = require('express');
const petRouter = express.Router();
const petStore = require('./pet-store');
const Service = require('./service');

petRouter
  .route('/')
  .get((req, res, next) => {
    const nextAvailable = Service.peek(petStore);
    res.json(nextAvailable);
  });

module.exports = petRouter;