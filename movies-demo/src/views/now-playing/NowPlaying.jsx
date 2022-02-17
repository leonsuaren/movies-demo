import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { MoviesDataBaseContext } from '../../context';
import { useGetMovies } from '../../hooks/api';

import anime from 'animejs';
import { movieAnimation } from '../../animation';
import { Spinner } from '../../components/spinner';

export const NowPlaying = () => {
  const moviesDataBaseContext = useContext(MoviesDataBaseContext);
  let [ loading, movies, error ] = useGetMovies();
  const navigate = useNavigate();

  useEffect(() => {
    anime(movieAnimation);
  }, []);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleOnClick = async (_id) => {
    const oneMovie = await axios.get(`http://localhost:8080/movies/${_id}`).then((response) => {
      return response.data.movie
    });
    moviesDataBaseContext.fetchOneMovie(oneMovie)
    navigate(`movies/${_id}`)
  }

  return (
    <div>
      <div>
        <h1>Now Playing</h1>
      </div>
      <div className="container ">
       { loading ? <Spinner /> :
         <div className="grid">
          {
            movies.map((movie, key) => {
              return (
                <div key={key} className="card cardSize movieAnime">
                  <button className='imageButton' onClick={() => handleOnClick(movie._id)}>
                    <img src={movie.poster_path} className="card-img-top imgSize" alt={movie.original_title} />
                  </button>
                </div>
              )
            })
          }
          {
            error && <p>Error Occured</p>
          }
        </div>
      }
      </div>
    </div>
  )
};