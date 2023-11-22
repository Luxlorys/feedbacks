const Feedback = require("../models/Feedback");

module.exports = class FeedbackService {
    static async getAllFeedbacks() {
        try {
            const feedback = await Feedback.find({});
            return feedback
        } catch (error) {
            console.error('Could not fetch feedbacks', error);
            throw error;
        }
    }

    static async saveFeedback(feedback) {
        try {
            const data = {
                barista: feedback.barista,
                score: feedback.score,
                comment: feedback.comment,
            }

            const response = await new Feedback(data).save();
            return response;
        } catch (error) {
            console.error('Could not save feedback', error);
            throw error;
        }
    }
}