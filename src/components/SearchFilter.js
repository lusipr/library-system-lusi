import React from 'react';

const genres = ['Fiction', 'Non-Fiction', 'Science'];

const SearchFilter = ({ searchTerm, onSearchChange, filterGenre, onFilterGenreChange, sortOption, onSortChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={onSearchChange} 
        placeholder="Cari berdasarkan judul atau pengarang" 
        className="w-full p-2 border rounded"
      />
      <select 
        value={filterGenre} 
        onChange={onFilterGenreChange} 
        className="p-2 border rounded"
      >
        <option value="">Semua Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <select 
        value={sortOption} 
        onChange={onSortChange} 
        className="p-2 border rounded"
      >
        <option value="">Urutkan</option>
        <option value="title">Judul</option>
        <option value="year">Tahun Terbit</option>
      </select>
    </div>
  );
};

export default SearchFilter;
