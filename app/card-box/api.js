const   Card = require('./model').Model,
        saveNewCard = require('./model').saveNew,
        router = require('express').Router

module.exports = router => router.route('/addCard')
    .get((req, res) => {
        saveNew(req.body).then(() => res.send('ok'))
    })


/*{
    router.route('/addCard')
        .get((req, res) => {
            saveNew(req.body).then(() => res.send('ok'))
        })
    return 
}*/         
    /*{
        type: 'get',
        path: '/cards',
        callback: (req, res) => {
            res.send('ok')
        }
    },*/