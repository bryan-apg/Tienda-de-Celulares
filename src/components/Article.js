import React from 'react';

const Article = ({ article, onDelete }) => {
  return (
    <div className="article">
      <h4>{article.name}</h4>
      <p>{article.description}</p>
      <button className="btn btn-danger" onClick={() => onDelete(article.id)}>Eliminar</button>
    </div>
  );
};

export default Article;