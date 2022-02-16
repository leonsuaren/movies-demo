import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesDataBaseContext = createContext();

export const MoviesDataBasePovider = ({ children }) => {
  const [moviesDataBase, setMoviesDataBase] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/movies').then((response) => {
      setMoviesDataBase(response.data.movies)
    })
  }, []);

  console.log(moviesDataBase);

  return (
    <MoviesDataBaseContext.Provider value={{ moviesDataBase }}>
      {children}
    </MoviesDataBaseContext.Provider>
  )
};