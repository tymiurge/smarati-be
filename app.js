// https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e
var express = require('express');
var app = express();
var mongoose = require('mongoose');
//DB setup
mongoose.connect("mongodb://mongo:27017");

app.get('/', (req, res) => {
   res.send('hey, test passed - changing!')
});

app.listen(3000, () => {
    console.log('example app is running on port 3000')
})