import React, { useEffect, useState } from 'react';

import MovieList from '../MovieList/MovieList';
import MovieSearch from '../MovieSearch/MovieSearch';
import Tab from '../Tab/Tab';
import { getPopular, getSearch, getGuestSession, getGenres, rateMovie, getRated } from '../../services/services_api';
import { GenresContext } from '../../context/GenresContext/GenresContext';

import style from './App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState('return');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [session, setSession] = useState('');
  const [genresState, setGenres] = useState([]);

  useEffect(() => {
    getPopular(page)
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
        setTotalPages(data.total_results);
      })
      .catch(() => onError());
  }, [page]);

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data.genres);
    });

    getGuestSession().then((data) => {
      setSession(data.guest_session_id);
    });
    localStorage.clear();
  }, []);

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

  const rateMovies = (movieId, rating) => {
    rateMovie(movieId, rating, session);
  };

  const getRate = () => {
    getRated(session).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_results);
    });
  };

  return (
    <GenresContext.Provider value={genresState}>
      <div className={style.App}>
        <Tab getRate={getRate} searchMovie={searchMovie} search={search} />
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
          rateMovies={rateMovies}
        />
      </div>
    </GenresContext.Provider>
  );
};

export default App;
