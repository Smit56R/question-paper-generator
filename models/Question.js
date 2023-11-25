const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    topic: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    marks: {
        type: Number,
        require: true
    },
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
