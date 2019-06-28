const express = require('express');

const messages = require('./messages');
const SurveyInfo = require('./SurveyInfo');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/messages', messages);
router.use('/SurveyInfo', SurveyInfo);

module.exports = router;
