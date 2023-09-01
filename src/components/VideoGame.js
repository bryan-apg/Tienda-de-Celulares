import React from 'react';

const VideoGame = ({ game, onDelete }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">Género: {game.genre}</p>
        <button className="btn btn-danger" onClick={() => onDelete(game.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default VideoGame;
