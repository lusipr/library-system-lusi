import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Judul Buku</th>
            <th className="py-2 px-4 border-r">Pengarang</th>
            <th className="py-2 px-4 border-r">Tahun Terbit</th>
            <th className="py-2 px-4 border-r">Genre</th>
            <th className="py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <BookItem key={book.id} book={book} deleteBook={deleteBook} editBook={editBook} />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 border-t">Tidak ada buku tersedia.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
