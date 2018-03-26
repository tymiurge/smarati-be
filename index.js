const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')

/*
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
*/


/** APP CONFIGURATION */

/** log requests to the console */
app.use(morgan('dev'))

/** configure body parser */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = 3000;

/** DATABASE SETUP */
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/db1')
    .then(() => console.info('mongo DB connection established'))
    .catch(e => console.error(e));


// source: https://github.com/scotch-io/node-api/blob/master/server.js

/** ROUTERS */
let router = express.Router()

router.use((req, res, next) => {
    console.log(`path: ${req.path}, from:${req.headers.host}, at:${req._startTime}`)
    next();
})


router.get(
    '/',
    (req, res) => {
        res.send('ok')
        //res.json({message: 'smarati api server status: OK'})
    }
)

router = require('./app/card-box')(router)
/*
router.route('/cards')
    .get((req, res) => {
        res.json({status: 'ok', data: [0, 1, 2], requestType: 'get'})
    })
    .post((req, res) => {
        res.json({status: 'ok', data: [{title: 't1'}, {title: 't2'}], requestType: 'post'})
    })

app.use('/api', router)
*/

/** START THE SERVER */
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
