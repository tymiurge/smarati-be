const   Card = require('./model').Model,
        saveNewCard = require('./model').saveNewCard,
        getCardsBy = require('./model').getCardsBy
        router = require('express').Router

module.exports = router => {
    /**
     * 
     */
    router.route('/cards/add').post((req, res) => {
        saveNewCard(req.body).then(() => {
            res.send('ok')
        })    
    })

    /**
     * 
     */
    router.route('/cards/get/:parentId').get((req, res) => 
        getCardsBy(req.body.parentId).then( queryRes => res.json(queryRes) )
    ) 

    /**
     * 
     */
    router.route('/cards/update').post((res, req) => {

    })
    

    return router
    
}
