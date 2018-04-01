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

/**
 * this is transforment of data from request (which should be passed
 * in flat format) into mongo object (wchich might be in complex hierarchical
 * format). the idea is to keep clients login as simple as possible while
 * the quering and saving logic is concentrated in model only
 * 
 * @common_data:
 *      type: enum (box|simple), required
 *      parent: ObjectId, if null (meaning the card is placed in root) 
 *              - null will be spcified
 *      tags: array, if null - empty array will be saved
 * 
 * any additional data fields are specified in each of transformers below.
 */
const cardFactory = {
    /**
     * @param data shap of:
     *      - @common_data
     *      - frontContent: string, is required
     * @returns mongo model
     */
    box: data => (new Model({
        type: data.type,
        sides: {
            front: {
                content: data.frontContent
            }
        },
        parent: data.parent,
        tags: data.tags || [],
        createdAt: (new Date().getTime())
    })),
    /**
     * @param data shape of:
     *      - @common_data
     *      -  
     */
    simple: data => (new Model({
        type: data.type,
        sides: {
            front: {
                content: data.frontContent
            },
            back: {
                content: data.backContent
            }
        },
        parent: data.parent,
        tags: data.tags || [],
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
