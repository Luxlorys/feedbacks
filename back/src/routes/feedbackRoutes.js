const express = require('express');
const feedbackController = require('../controllers/FeedbackController');
const router = express.Router();

// router.get('/api/v1/get-feedbacks', async (req, res) => {
    // try {
    //     const data = await feedbackController.getAllFeedbacks();
    //     res.json(data);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({message: 'Internal Server Error'})
    // }
// });

router.get('/api/v1/get-feedbacks', feedbackController.get);
router.post('/api/v1/send-feedback', feedbackController.post)

// router.post('/api/v1/send-feedback', async (req, res) => {
//     try {
//         const feeback = req.body;
//         await feedbackController.saveFeedback(feeback);
//         console.log('Received feedback:', feeback);
//         res.json({message: 'Feedback successfully sent!'})
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message: 'Internal Server Error'})
//     }
// });

module.exports = router;