const   Card = require('./model').Model,
        saveNewCard = require('./model').saveNewCard,
        getCardsBy = require('./model').getCardsBy
        router = require('express').Router

module.exports = router => {
    /**
     * 
     */
    router.route('/card/add').post((req, res, next) => {
        saveNewCard(req.body).then(queryRes => {
            res.json(queryRes)
        })
    })

    /**
     * 
     */
    router.route('/card/get/:parentId').get((req, res, next) => 
        getCardsBy(req.params.parentId).then( queryRes => {
            res.json(queryRes)
        })
    )     

    return router
    
}
