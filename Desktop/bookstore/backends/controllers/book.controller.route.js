const Book = require('../models/bookModel.js')


const createBooks = async(req, res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
       ){
            return res.status(400).send({
            message: "send all required fields: title, author, publishedYear"})
       }


       const book = await Book.create(req.body)
       res.status(200).json(book)

  } catch (error) {

       console.log(error)
       res.status(500).json({message: error.message})
   }
}
const getBooks = async(req, res) =>{

    try {

        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        }) 
            
   } catch (error) {
    res.status(500).json({message: error.message})
    }

            
    
}

const getBook = async(req, res) =>{
    
    try {

        const {id} = req.params;
        const book = await Book.findbyId(id);
        res.status(200).json(book)
            
    
   } catch (error) {
    res.status(500).json({message: error.message})
    }
}

const updateBook = async(req, res) =>{
    try {
        
        const {id} = req.params;
        const Book = await Book.Book.findByIdAndUpdate(id, req.body)
        if (!book){
        return res.status(404).json({message: "Book not found!"})

   }
        const updatedBook = await Book.findById(id)
        res.status(200).json(updatedBook)
    
} catch (error) {
   res.status(500).json({message: error.message})
    
}
    
}

const deleteBook = async(req, res) =>{
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id)
        if (!book){
        return res.status(404).json ({message: 'Unable to delete; Book not found'})
    }

        res.status(200).json({message: 'Book Deleted Successfully'})
    } catch (error) {
    
        res.status(500).json({message: error.message})
    }
    
}

module.exports = {
    createBooks,
    getBooks,
    getBook,
    updateBook,
    deleteBook

}
