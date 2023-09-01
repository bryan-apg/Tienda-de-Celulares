import React, { useState, useEffect } from 'react';
import Article from './Article';

const ArticleList = () => {
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem('articles')) || []
  );
  const [newArticleName, setNewArticleName] = useState('');
  const [newArticleDescription, setNewArticleDescription] = useState('');

  const [videoGames, setVideoGames] = useState(
    JSON.parse(localStorage.getItem('videoGames')) || []
  );
  const [newVideoGameName, setNewVideoGameName] = useState('');
  const [newVideoGameGenre, setNewVideoGameGenre] = useState('');

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('videoGames', JSON.stringify(videoGames));
  }, [videoGames]);

  const handleDelete = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  const handleArticleAdd = () => {
    if (newArticleName && newArticleDescription) {
      const newArticle = {
        id: articles.length + 1,
        name: newArticleName,
        description: newArticleDescription
      };
      setArticles([...articles, newArticle]);
      setNewArticleName('');
      setNewArticleDescription('');
    }
  };

  const handleVideoGameAdd = () => {
    if (newVideoGameName && newVideoGameGenre) {
      const newVideoGame = {
        id: videoGames.length + 1,
        name: newVideoGameName,
        genre: newVideoGameGenre
      };
      setVideoGames([...videoGames, newVideoGame]);
      setNewVideoGameName('');
      setNewVideoGameGenre('');
    }
  };

  const handleDeleteVideoGameFields = () => {
    setNewVideoGameName('');
    setNewVideoGameGenre('');
  };

  return (
    <div className="container">
      <h1>Tienda De Celulares</h1>
      <h2>Agregar/Eliminar Articulos</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Marca"
          value={newArticleName}
          onChange={(e) => setNewArticleName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Modelo"
          value={newArticleDescription}
          onChange={(e) => setNewArticleDescription(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleArticleAdd}>
          Agregar
        </button>
      </div>
      {articles.map((article) => (
        <Article key={article.id} article={article} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ArticleList;
