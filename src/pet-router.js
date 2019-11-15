const express = require('express');
const petRouter = express.Router();
const petStore = require('./pet-store');
const PetsService = require('./pets-service');

petRouter
  .route('/')
  .get((req, res, next) => {
    const nextAvailable = PetsService.peek(petStore);
    res.json(nextAvailable);
  });




module.exports = petRouter;