import React, { useEffect } from 'react';

import { useGetFavMovies } from '../../hooks/api';

import anime from 'animejs';
import { movieAnimation } from '../../animation';
import { Spinner } from '../../components/spinner';
import { ServerError } from '../../components/server-error';

const NotFavorites = () => {
  return (
    <div>
      <h1>I'm not your favorite!!</h1>
      <img src='minion-mad.png' alt='Not your favorite'/>
    </div>
  )
};

export const Favorites = () => {
  let [loading, favorites, error] = useGetFavMovies();
  let favoritesCount = favorites.length;

  useEffect(() => {
    anime(movieAnimation);
  }, []);

  return (
    <div className='notFavoriteWrapper' data-test='favorites-component'>
      { favoritesCount <= 0 ? '' :
        <div>
          <h1>Favorites</h1>
        </div>
      }
      <div className="container ">
        {loading ? <Spinner /> :
          <div>
            {favoritesCount <= 0 ? <NotFavorites /> :
              <div className="grid">
                {
                  favorites.map((movie, key) => {
                    return (
                      <div key={key} className="card cardSize movieAnime">
                        <button className='imageButton'>
                          <img src={movie.poster_path} className="card-img-top imgSize" alt={movie.original_title} />
                        </button>
                      </div>
                    )
                  })
                }
              </div>
            }
          </div>
        }
        {
          error && <ServerError />
        }
      </div>
    </div>
  )
};