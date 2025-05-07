import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CharacterList from './components/CharacterList';
import SearchBar from './components/SearchBar';
import { fetchCharacters } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters()); // Fetch all characters initially
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Rick and Morty Explorer</h1>
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default App;