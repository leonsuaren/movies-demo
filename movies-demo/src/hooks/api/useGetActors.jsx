import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetActors = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/actors').then((response) => {
      setLoading(false);
      setResults(response.data.actors);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
    return () => {
      setLoading(false);
    }
  }, []);

  return [loading, results, error]
};