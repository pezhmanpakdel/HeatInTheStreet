const express = require('express');

const router = express.Router();
const Joi = require('joi');
// const db = require('../db');
const db = require('monk')('localhost/dashboard');


// const messages = db.get('messages');
// const Dashboard = db.get('Data5min2');
const Dashboard = db.get('SurveyBike');

const schema = Joi.object().keys({
  day: Joi.string(),
  minnow: Joi.string(),
  Q1: Joi.string(),
  Q2: Joi.string(),
  Q3: Joi.string(),
  Q4: Joi.string(),
  Q5: Joi.string(),
  Q6: Joi.string(),

});
router.get('/', (req, res) => {
  Dashboard.find()
    .then(Suervey=>{
      res.json(Suervey);
    })
});



module.exports = router;
