import React, { useEffect, useState } from 'react';

import MovieList from '../MovieList/MovieList';
import { getMovie, getPopular } from '../../services/services_api';

import style from './App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  // console.log('movies: ', movies);

  useEffect(() => {
    getPopular().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <div className={style.App}>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
