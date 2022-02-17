import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesDataBaseContext = createContext();

export const MoviesDataBasePovider = ({ children }) => {
  const [moviesDataBase, setMoviesDataBase] = useState();
  const [actorsDataBase, setActorsDataBase] = useState();
  const [singleMovie, setSingleMovie] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/movies').then((response) => {
      setMoviesDataBase(response.data.movies)
    });
    axios.get('http://localhost:8080/actors').then((response) => {
    setActorsDataBase(response.data.actors);
    });
  }, []);

  const fetchOneMovie = (oneMovie) => {
    setSingleMovie(oneMovie);
  }

  return (
    <MoviesDataBaseContext.Provider value={{ moviesDataBase, singleMovie, actorsDataBase, fetchOneMovie }}>
      {children}
    </MoviesDataBaseContext.Provider>
  )
};