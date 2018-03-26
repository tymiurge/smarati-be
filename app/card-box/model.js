var exports = module.exports = {};
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    content: mongoose.Schema.Types.Mixed,
    createdAt: Number,
    parent: mongoose.Schema.Types.ObjectId,
    tags: []
});

const Model = mongoose.model('CardBox', Schema)

module.exports = Model
exports.saveNew = data => (new Model({
    type: data.Type,
    content: {
        title: data.content.title
    },
    createdAt: (new Date()).getTime(),
    parent: data.parent || null
})).save()