import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Showbook from './components/Showbooks';
import DeleteBook from './components/DeleteBooks';
import EditBook from './components/EditBooks';
import CreateBooks from './components/CreateBooks';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<Showbook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='books/delete/:id' element={<DeleteBook/>}/>
      
    </Routes>



  );
}

export default App;