const express = require('express');

const router = express.Router();
const Joi = require('joi');
// const db = require('../db');
const db = require('monk')('localhost/dashboard');


// const messages = db.get('messages');
// const Dashboard = db.get('Data5min2');
const Dashboard = db.get('Data5min8');

const schema = Joi.object().keys({
  name: Joi.string(),
  message: Joi.string(),
  latitude: Joi.number(),
  longitude: Joi.number(),
  date: Joi.date(),

});
router.get('/', (req, res) => {
Dashboard.find()
.then(allMessages=>{
  res.json(allMessages);
})
});


router.post('/', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if  (result.error === null) {
    res.json([]);

    const {name,message,latitude,longitude}=req.body;

    const userMessage={
      name,
      message,
      latitude,
      longitude,
      date: new Date()
    };
    messages.insert(usermesage)
    .then(insertUsermessage=>{
      res.json(insertUsermessage);
    });
  } else {
    next(result.error);
  }

});

module.exports = router;
