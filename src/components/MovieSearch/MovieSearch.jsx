import React from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';

import style from './MovieSearch.module.css';

const MovieSearch = ({ searchMovie }) => {
  const fn = (input) => {
    searchMovie(input);
  };

  const handleChange = (e) => {
    fn(e.target.value);
  };

  const debouncedFn = debounce(handleChange, 1000);

  return (
    <>
      <Input
        className={style.input}
        placeholder={'Type to search...'}
        onChange={(e) => {
          debouncedFn(e);
        }}
      />
    </>
  );
};

export default MovieSearch;
