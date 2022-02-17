import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetMovies = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/movies').then((response) => {
      setTimeout(() => {setLoading(false);}, 2000);
      
      setResults(response.data.movies);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    })
    return () => {
      setLoading(false);
    }
  }, []);

  return [loading, results, error];
};