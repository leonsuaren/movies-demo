import React, { useContext, useEffect } from 'react';
import { MoviesDataBaseContext } from '../../context';

import anime from 'animejs';
import { movieAnimation } from '../../animation/anime'

export const SingleMovie = () => {
  const moviesDataBaseContext = useContext(MoviesDataBaseContext);
  const singleMovie = moviesDataBaseContext.singleMovie;

  useEffect(() => {
    anime(movieAnimation);
  }, []);

  return (
    <div>
      <div className="container movieAnime">
        <div className="row">
          <div className="text-center singleMovieContainer">
            <h1>
              {singleMovie.original_title}
            </h1>
            <a href={singleMovie.homepage}><img src='public/posters/coco.jpeg' /></a>
            <p className="overview-header">Movie Synopsis:
            <span className="single-movie-overview">
                {singleMovie.overview}
            </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center movieAnime">
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#Modal">
          More Details
        </button>
      </div>
      <div className="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{singleMovie.original_title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Release Date: {singleMovie.release_date}</p>
              <p>Original Language: {singleMovie.original_language}</p>
              <p>Popularity: {singleMovie.popularity}</p>
              <p>Vote Average: {singleMovie.vote_average}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};