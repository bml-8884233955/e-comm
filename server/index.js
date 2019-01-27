const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')

//set up express app
const app = express();

app.use(cors());
//connect to mongodb
mongoose.connect('mongodb://localhost/user');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//Initialiaze Routes
app.use('/api', routes);

//error handling middleware
app.use(function (err, req, res, next) {
    // console.log(err); 
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    res.status(422).send({ error: err.message });
});


//listen for request
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});