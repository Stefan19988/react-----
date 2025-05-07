import React from 'react';
import { useSelector } from 'react-redux';
import './CharacterList.css';

const CharacterList = () => {
  const { characters, loading, error } = useSelector((state) => state);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="character-list">
      {characters.map((char) => (
        <div className="character-card" key={char.id}>
          <img src={char.image} alt={char.name} />
          <h3>{char.name}</h3>
          <p>Status: {char.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;