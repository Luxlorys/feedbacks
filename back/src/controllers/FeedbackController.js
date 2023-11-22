const Feedback = require("../models/Feedback");

const getAllFeedbacks = async (req, res) => {
    try {
        const data = await Feedback.find({});
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Interval Server Error'})
    }
};

const saveFeedback = async (req, res) => {
    try {
        const data = await new Feedback(req.body);
        const saveData = await data.save();
        res.json(saveData)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Interval Server Error'})
    }
}




module.exports = {
    get : getAllFeedbacks,
    post : saveFeedback
};