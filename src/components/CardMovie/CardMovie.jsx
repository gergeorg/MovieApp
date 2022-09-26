/* eslint-disable max-len */
import React from 'react';
import { format } from 'date-fns';
import { Image, Typography } from 'antd';

import style from './CardMovie.module.css';
import fallbackImg from './no-image.webp';

const CardMovie = ({ itemProps }) => {
  const { id, title, overview, release_date, poster_path } = itemProps;

  const { Title, Text, Paragraph } = Typography;

  const descriptionShortener = (description) => {
    const overviewArr = description.split(' ');
    overviewArr.length = 20;
    let shortOverview = overviewArr.join(' ');
    shortOverview += ' ...';
    return shortOverview;
  };

  return (
    <div className={style.card}>
      <Image
        width={183}
        height={281}
        alt={`Постер фильма ${title}`}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        fallback={fallbackImg}
      />

      <div className={style.wrapper}>
        <div className={style.card_header}>
          <div className={style.card_headline}>
            <Title className={style.title} level={5}>
              {title}
            </Title>
            <div className={style.rating}>6.6</div>
          </div>

          <div className={style.release}>
            {release_date ? format(new Date(release_date), 'MMMM d, y') : 'дата выхода неизвестна'}
          </div>
          <span className={style.genres}>Action</span>
        </div>

        <Paragraph className={style.overview}>{descriptionShortener(overview)}</Paragraph>
      </div>
    </div>
  );
};

export default CardMovie;
