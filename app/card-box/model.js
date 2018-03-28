var exports = module.exports = {};
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    type: String,
    //owner: mongoose.Schema.Types.ObjectId,
    sides: mongoose.Schema.Types.Mixed,
    createdAt: Number,
    parent: mongoose.Schema.Types.ObjectId,
    tags: []
});

const Model = mongoose.model('CardBox', Schema)

const cardFactory = {
    box: data => (new Model({
        type: data.type,
        sides: {
            front: {
                content: data.sides.front.content
            }
        },
        parent: data.parent,
        tags: data.tags,
        createdAt: (new Date().getTime())
    }))
}

exports.Model = Model

/**
 * 
 * @param {*} data 
 * @returns promice
 */
exports.saveNewCard = data => {
    const card = cardFactory[data.type](data)
    return card.save()
}
