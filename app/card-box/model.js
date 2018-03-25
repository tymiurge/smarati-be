const mongoose = require('mongoose')

const Schema   = new Schema({
    title: String,
    createdAt: Date,
    parent: mongoose.Schema.ObjectId,
    tags: []
});

module.exports = mongoose.model('CardBox', Schema)