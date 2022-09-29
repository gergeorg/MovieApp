import React, { useEffect, useState } from 'react';

import MovieList from '../MovieList/MovieList';
import { getMovie, getPopular } from '../../services/services_api';

import style from './App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopular()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => onError());
  }, []);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div className={style.App}>
      <MovieList movies={movies} loading={loading} error={error} />
    </div>
  );
};

export default App;
