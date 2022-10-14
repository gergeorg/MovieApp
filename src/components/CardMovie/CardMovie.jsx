import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Image, Typography, Rate } from 'antd';

import GenresItem from '../GenresItem/GenresItem';
import { GenresContext } from '../../context/GenresContext/GenresContext';

import './CardMovie.css';
import fallbackImg from './no-image.webp';

const CardMovie = ({ itemProps, rateMovies }) => {
  const { id, title, overview, release_date, poster_path, vote_average, genre_ids } = itemProps;

  const { Title, Text, Paragraph } = Typography;

  const descriptionShortener = (description) => {
    const overviewArr = description.split(' ');
    overviewArr.length = 12;
    let shortOverview = overviewArr.join(' ');
    shortOverview += ' ...';
    return shortOverview;
  };

  const theme = useContext(GenresContext);

  const [ratingColor, setRatingColor] = useState('circle');

  if (theme === undefined) {
    throw new Error();
  }

  const [movieRating, setMovieRating] = useState(0);
  useEffect(() => {
    setMovieRating(localStorage.getItem(id) || '0');
    if (vote_average < 3) {
      setRatingColor('circle circle-red');
    } else if (vote_average >= 3 && vote_average < 5) {
      setRatingColor('circle circle-orange');
    } else if (vote_average >= 5 && vote_average < 7) {
      setRatingColor('circle circle-yellow');
    } else if (vote_average >= 7) {
      setRatingColor('circle circle-green');
    }
  }, []);

  const genres = theme.map((item) => {
    if (genre_ids.includes(item.id)) {
      return (
        <div key={Math.random() * 1000}>
          <GenresItem GenresItemProps={item.name} />
        </div>
      );
    }
  });

  return (
    <div className='card'>
      <Image
        width={183}
        height={281}
        alt={`Постер фильма ${title}`}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        fallback={fallbackImg}
      />

      <div className='wrapper'>
        <div className='card_header'>
          <div className='card_headline'>
            <Title className='title' level={5}>
              {title}
            </Title>
            <div className='rating'>
              <div className={ratingColor}>
                <span className='ratingCounter'>{vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>

          <div className='release'>
            {release_date ? format(new Date(release_date), 'MMMM d, y') : 'дата выхода неизвестна'}
          </div>
          <span className='genres'>{genres}</span>
        </div>

        <Paragraph className='overview'>{descriptionShortener(overview)}</Paragraph>

        <div className='rate'>
          <Rate
            style={{ fontSize: 15, position: 'absolute', bottom: 20 }}
            count={10}
            allowHalf
            allowClear={false}
            defaultValue={0}
            value={movieRating}
            onChange={(ratingCounter) => {
              rateMovies(id, ratingCounter);
              setMovieRating(ratingCounter);
              localStorage.setItem(id, ratingCounter);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
