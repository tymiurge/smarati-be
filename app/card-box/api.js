const   Card = require('./model').Model,
        saveNewCard = require('./model').saveNewCard,
        getCardsBy = require('./model').getCardsBy
        router = require('express').Router

module.exports = router => {
    /**
     * 
     */
    router.route('/addCard').post((req, res) => {
        saveNewCard(req.body).then(() => {
            res.send('ok')
        })    
    })
    /**
     * 
     */
    router.route('/getCards/:parentId').get((req, res) => 
        getCardsBy(req.body.parentId).then( queryRes => res.json(queryRes) )
    ) 
    
    return router
    
}


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