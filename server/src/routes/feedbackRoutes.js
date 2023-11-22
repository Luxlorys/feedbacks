const express = require('express');
const feedbackController = require('../controllers/FeedbackController');
const router = express.Router();

router.get('/api/v1/get-feedbacks', feedbackController.get);
router.post('/api/v1/send-feedback', feedbackController.post)

module.exports = router;