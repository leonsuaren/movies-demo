import React, { useContext, useEffect } from 'react';
import { MoviesDataBaseContext } from '../../context';

import anime from 'animejs';
import { movieAnimation } from '../../animation/anime';

export const NowPlaying = () => {
  const moviesDataBaseContext = useContext(MoviesDataBaseContext);
  const movies = moviesDataBaseContext.moviesDataBase;

  useEffect(() => {
    anime(movieAnimation)
  }, []);

  return (
    <div>
      <div>
        <h1>Now Playing</h1>
      </div>
      <div className="container ">
          <div class="grid">
            {
              movies.map((movie, key) => {
                return (
                  <div key={key} className="card cardSize movieAnime">
                    <img src={movie.poster_path} className="card-img-top imgSize" alt={movie.original_title} />
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
};