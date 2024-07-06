import React from 'react';

const BookItem = ({ book, deleteBook, editBook }) => {
  return (
    <tr>
      <td className="py-2">{book.title}</td>
      <td className="py-2">{book.author}</td>
      <td className="py-2">{book.year}</td>
      <td className="py-2">{book.genre}</td>
      <td className="py-2">
        <button 
          onClick={() => editBook(book)} 
          className="px-4 py-1 bg-yellow-500 text-white rounded mr-2"
        >
          Edit
        </button>
        <button 
          onClick={() => deleteBook(book.id)} 
          className="px-4 py-1 bg-red-500 text-white rounded"
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default BookItem;
