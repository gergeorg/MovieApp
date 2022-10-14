import React from 'react';

import style from './GenresItem.module.css';

const GenresItem = ({ GenresItemProps }) => {
  return <span className={style.GenresItem}>{GenresItemProps}</span>;
};

export default GenresItem;
