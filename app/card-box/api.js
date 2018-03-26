const   Card = require('./model').Model,
        saveNewCard = require('./model').saveNew

module.exports = router => {
    router.route('/addCard')
        .get((req, res) => {
            saveNew(req.body).then(() => res.send('ok'))
        })
}         
    /*{
        type: 'get',
        path: '/cards',
        callback: (req, res) => {
            res.send('ok')
        }
    },*/