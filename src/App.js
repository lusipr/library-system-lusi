import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchFilter from './components/SearchFilter';
import './index.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [sortOption, setSortOption] = useState('');

  const addBook = (book) => {
    book.id = Date.now().toString();
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
    setCurrentBook(null);
  };

  const openModal = () => {
    setCurrentBook(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return (
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterGenre === '' || book.genre === filterGenre)
    );
  });

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'year') {
      return a.year - b.year;
    } else {
      return 0;
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Perpustakaan Sederhana TSM</h1>
      <div className="flex justify-end mb-4">
        <button 
          onClick={openModal} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tambah Buku
        </button>
      </div>
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filterGenre={filterGenre}
        onFilterGenreChange={handleFilterGenreChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
      <BookList books={sortedBooks} deleteBook={deleteBook} editBook={(book) => {
        setCurrentBook(book);
        setIsModalOpen(true);
      }} />
      {isModalOpen && (
        <BookForm 
          addBook={addBook} 
          editBook={editBook} 
          currentBook={currentBook} 
          setCurrentBook={setCurrentBook} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default App;
