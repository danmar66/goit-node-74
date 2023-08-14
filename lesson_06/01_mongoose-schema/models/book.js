const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'You must specify title!']
    },
    qty: {
        type: Number,
        min: [2, 'You must buy at least 2 item'],
        required: true
    },
    author:  {
        type: String,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    },
    genre: {
        type: String,
        enum: ['love', 'tech'],
        required: true
    },
    isbn: {
        type: String, 
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
        required: true,
        unique: true
    }
},
{
    versionKey: false, timestamps: true
})

const Book = model('book', bookSchema)

module.exports = Book