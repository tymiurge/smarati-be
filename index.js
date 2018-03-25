const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')


/** APP CONFIGURATION */

/** log requests to the console */
app.use(morgan('dev'))

/** configure body parser */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

const PORT = 3000;

/** DATABASE SETUP */
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/db1')
    .then(() => console.info('mongo DB connection established'))
    .catch(e => console.error(e));

/*
const CardBox = require('./app/card-box')


// Schemas

const CardSchema = new mongoose.Schema({
    type: String,
    front: String,
    back: String
})

const CardModel = mongoose.model('Card', CardSchema)

// REQUIRE MIDDLEWARE

*/

var options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser

app.get('/entry', (req, res) => {
    res.send('this is an entry 111')
    console.log('!!! entry !!!')
})

const Cat = mongoose.model('Cat', { name: String })
app.get('/saver', (req, res) => {
    //new Thread({title: req.body.title, author: req.body.author}).save();
    console.log('!!! looking for a cat !!!')
    const k = new Cat({name: 'Zildjian'})
    k.save().then(() => console.log('meow'))
        //new CardModel({type: 'simple', front: 'crank', back: 'crank1'}).save()
        //.then(() => res.send('ok'))
        //.catch(e => res.send(e))
})




app.listen(PORT, ()=>{
    console.log('started');
});
