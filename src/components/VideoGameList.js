import React, { useState } from 'react';
import VideoGame from './VideoGame';

const VideoGameList = () => {
  const [videoGames, setVideoGames] = useState([
    { id: 1, name: 'Juego 1', genre: 'Género 1' },
    { id: 2, name: 'Juego 2', genre: 'Género 2' }
  ]);
  const [newGameName, setNewGameName] = useState('');
  const [newGameGenre, setNewGameGenre] = useState('');

  const handleDelete = (id) => {
    const updatedGames = videoGames.filter((game) => game.id !== id);
    setVideoGames(updatedGames);
  };

  const handleAdd = () => {
    if (newGameName && newGameGenre) {
      const newGame = {
        id: videoGames.length + 1,
        name: newGameName,
        genre: newGameGenre
      };
      setVideoGames([...videoGames, newGame]);
      setNewGameName('');
      setNewGameGenre('');
    }
  };

  return (
    <div className="container">
      <h1>Tienda de Videojuegos</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del juego"
          value={newGameName}
          onChange={(e) => setNewGameName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Género"
          value={newGameGenre}
          onChange={(e) => setNewGameGenre(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Agregar Juego
        </button>
      </div>
      {videoGames.map((game) => (
        <VideoGame key={game.id} game={game} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default VideoGameList;
