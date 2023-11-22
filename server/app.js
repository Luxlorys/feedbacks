const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoute = require('./src/routes/feedbackRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// permit to do cors requests
app.use(cors());

app.use(bodyParser.json());

// feedback router
app.use(feedbackRoute);

// Connect to MongoDB
main().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch(err => console.error(err));


async function main() {
    await mongoose.connect(process.env.MONGO_URI, {dbName: 'Feedbacks'});
    console.log('connected');
}