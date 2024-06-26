const express = require('express')
const mongoose = require('mongoose')



const bookSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },

    author: {
        type: String,
        require: true
    },

    publishedYear: {
        type: Number,
        require: true
    },

},

    {
        timestamps: true
    }

);


const Book = mongoose.model('Cat', bookSchema);
module.exports = Book;

