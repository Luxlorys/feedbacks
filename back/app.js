const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const feedbackRoute = require('./src/routes/feedbackRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// permit to do cross requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

// feedback router
app.use(feedbackRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// connect to mongo db
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URI, {dbName: 'Feedbacks'});
    console.log('connected');
}