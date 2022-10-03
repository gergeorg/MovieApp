import React, { useEffect, useState } from 'react';

import MovieList from '../MovieList/MovieList';
import MovieSearch from '../MovieSearch/MovieSearch';
import { getPopular, getSearch } from '../../services/services_api';

import style from './App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState('return');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getPopular(page)
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
        setTotalPages(data.total_results);
      })
      .catch(() => onError());
  }, [page]);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const searchMovie = (search, page) => {
    setLoading(true);
    getSearch(search, page)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_results);
        setSearch(search);
        setLoading(false);
      })
      .catch(() => onError());
  };

  const choosePage = (current) => {
    setMovies([]);
    setPage(current);
  };

  return (
    <div className={style.App}>
      <MovieSearch searchMovie={searchMovie} />

      <MovieList
        movies={movies}
        loading={loading}
        error={error}
        search={search}
        page={page}
        totalPages={totalPages}
        choosePage={choosePage}
        searchMovie={searchMovie}
      />
    </div>
  );
};

export default App;
