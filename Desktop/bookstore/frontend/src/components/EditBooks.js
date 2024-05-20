import React, { useState, useEffect } from 'react';
import BackButton from './elements/BackButton';
import Spinner from './elements/Spinner';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [editedBook, setEditedBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/api/book/${id}`)
      .then((res) => {
        setEditedBook(res.data);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishedYear(res.data.publishedYear);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishedYear) {
      toast.error('Please fill up all details');
      return;
    }

    const data = {
      title,
      author,
      publishedYear,
    };

    setLoading(true);
    axios.put(`http://localhost:3001/api/book/${id}`, data)
      .then(() => {
        setLoading(false);
        toast.success("Book Edited Successfully");
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Error: ${error.message}`);
        setLoading(false);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type='text'
              placeholder={editedBook.title || 'Title'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input
              type='text'
              placeholder={editedBook.author || 'Author'}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Published Year</label>
            <input
              type='number'
              placeholder={editedBook.publishedYear || 'Published Year'}
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EditBooks;
