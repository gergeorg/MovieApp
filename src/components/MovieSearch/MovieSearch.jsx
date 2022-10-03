import React from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';

import './MovieSearch.module.css';

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
        placeholder={'Type to search...'}
        onChange={(e) => {
          debouncedFn(e);
        }}
      />
    </>
  );
};

export default MovieSearch;
