const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')

/** APP CONFIGURATION */
//app.use(morgan('combined'))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 4000;

/** DATABASE SETUP */
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/db1')
    .then(() => console.info('mongo DB connection established'))
    .catch(e => console.error(e));


/** ROUTERS */
const router = express.Router()
/*
router.use((req, res, next) => {
    console.log(`path: ${req.path}, from:${req.headers.host}, at:${req._startTime}`)
    next();
})
*/
router.get(
    '/',
    (req, res, next) => {
        res.send('ok')
        //res.json({message: 'smarati api server status: OK'})
    }
)



require('./app/card-box')(router)

app.use('/api', router)

/** START THE SERVER */
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
