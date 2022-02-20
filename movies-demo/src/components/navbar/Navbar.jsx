import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { navbarAnimation } from '../../animation';

export const Navbar = () => {

  useEffect(() => {
    anime(navbarAnimation);
  }, []);
  //navbar and container-fluid FIRST SPRINT
  //Links Movies Demo, Now Playing, Favorites, Actors FIRST SPRINT
  //Select and form Third SPRINT
  //toggler button and collapse navbar to first pair programming session.
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbarAnimation" data-test='navbar-component'>
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Movies Demo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='now-playing' className="nav-link active">Now Playing</Link>
            </li>
            <li className="nav-item">
              <Link to='favorites' className="nav-link">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link to='actors' className="nav-link">Actors</Link>
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