import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Tienda de Artículos</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/videojuegos">VideoGames</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;