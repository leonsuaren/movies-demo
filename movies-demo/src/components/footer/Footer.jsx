import React from 'react';

export const Footer = () => {
  //Footer, its four sections, brand and Team MIT xPro FIRST SPRINT all in one ticket
  return(
    <footer className="pt-4 my-md-5 pt-md-5 border-top container">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="movies-logo.png" alt="" width="100" height="100"/>
        <small className="d-block mb-3 text-muted">&copy; Team MIT xPro</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Home</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Now Playing</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Favorites</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Control Panel</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Log In</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Log Out</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Sign Up</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About the Project</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">The Stack</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resources</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About the Team</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">The Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">About Us</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
};