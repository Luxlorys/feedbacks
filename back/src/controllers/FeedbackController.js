const Feedback = require("../models/Feedback");

class FeedbackController {
    async getAllFeedbacks() {
        try {
            const data = await Feedback.find({});
            return data;
        } catch(error) {
            console.error('Something went wrong', error);
            throw error;
        }
    }
    
    async saveFeedback(feedback) {
        try {
            const data = await new Feedback(feedback);
            return await data.save();
        } catch (error) {
            console.error('Internal Server Error', error);
            throw error;
        }
    }
}

module.exports = FeedbackController;