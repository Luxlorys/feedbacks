const FeedbackService = require('../services/feedbackService');

const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await FeedbackService.getAllFeedbacks();
        if(!feedbacks || feedbacks.length === 0) {
            res.status(404).json({message: 'No feedbacks found'})
        }
        res.json(feedbacks);
    } catch (error) {
        console.error('Internal Server Error', error);
        throw error;
    }
}


const saveFeedback = async (req, res) => {
    try {
        const createdFeedback = await FeedbackService.saveFeedback(req.body);
        res.json(createdFeedback);
    } catch (error) {
        console.error('Internal Server Error', error);
        throw error;
    }
}


module.exports = {
    get : getAllFeedbacks,
    post : saveFeedback
};