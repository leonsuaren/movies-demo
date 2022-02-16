import React, { useContext } from 'react';
import { MoviesDataBaseContext } from '../../context';

export const NowPlaying = () => {
  const moviesDataBaseContext = useContext(MoviesDataBaseContext);
  const movies = moviesDataBaseContext.moviesDataBase;

  return (
    <div>
      <div>
        <h1>Now Playing</h1>
      </div>
      {
        movies.map((movie, key) => {
          return (
            <div key={key} className="container col-sm-12">
              <div className="row">
                <div class="col-sm-12">
                  <div className="col-md-3 col-sm-4 card cardSize">
                    <img src={movie.poster_path} className="card-img-top imgSize" alt={movie.original_title} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};