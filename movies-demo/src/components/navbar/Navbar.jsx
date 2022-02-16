import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">Movies Demo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='now-playing' className="nav-link active" aria-current="page" href="#">Now Playing</Link>
            </li>
            <li className="nav-item">
              <Link to='favorites' className="nav-link" href="#">Favorites</Link>
            </li>
          </ul>
          <div className="form-group md-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>MOVIE</option>
              <option value="actor">ACTOR</option>

            </select>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
};