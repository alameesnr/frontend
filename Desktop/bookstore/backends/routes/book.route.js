const express = require('express')
const router = express.Router()

const {

    createBooks,
    getBooks,
    getBook,
    updateBook,
    deleteBook
} = require('../controllers/book.controller.route.js')

router.post('/', createBooks)

router.get('/', getBooks)

router.get('/:id', getBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)


module.exports = router


