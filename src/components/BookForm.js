import React, { useState, useEffect } from 'react';

const genres = ['Fiction', 'Non-Fiction', 'Science'];

const BookForm = ({ addBook, editBook, currentBook, setCurrentBook, closeModal }) => {
  const [book, setBook] = useState({ title: '', author: '', year: '', genre: '' });

  useEffect(() => {
    if (currentBook) {
      setBook(currentBook);
    }
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      editBook(book);
    } else {
      addBook(book);
    }
    setBook({ title: '', author: '', year: '', genre: '' });
    setCurrentBook(null);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{currentBook ? 'Edit Buku' : 'Tambah Buku'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="title" 
            value={book.title} 
            onChange={handleChange} 
            placeholder="Judul Buku" 
            required 
            className="w-full p-2 border rounded"
          />
          <input 
            type="text" 
            name="author" 
            value={book.author} 
            onChange={handleChange} 
            placeholder="Pengarang" 
            required 
            className="w-full p-2 border rounded"
          />
          <input 
            type="number" 
            name="year" 
            value={book.year} 
            onChange={handleChange} 
            placeholder="Tahun Terbit" 
            required 
            className="w-full p-2 border rounded"
          />
          <select 
            name="genre" 
            value={book.genre} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded"
          >
            <option value="">Pilih Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={closeModal} 
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Batal
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              {currentBook ? 'Edit Buku' : 'Tambah Buku'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
