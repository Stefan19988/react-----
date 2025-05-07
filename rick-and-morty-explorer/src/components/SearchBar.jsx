import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from '../redux/actions';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchCharacters(term));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search characters"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
