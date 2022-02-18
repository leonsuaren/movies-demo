import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetFavMovies = () => {
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/favorites').then((response) => { 
      setTimeout(() => {setLoading(false);}, 2000);
      setFavorites(response.data.favoriteMovie);
    }).catch((error) => {
      setError(error);
    });
    return () => {
      setLoading(false);
    };
  }, []);

  return [loading, favorites, error]
};