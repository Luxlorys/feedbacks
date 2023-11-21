const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedback = Schema({
    barista: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    // autogenerate date when new doc is added
    date: {
        type: String,
        default: new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Kiev',
            hour12: false
        })
    }
})

const Feedback = mongoose.model('Feedback', feedback);
module.exports = Feedback;
