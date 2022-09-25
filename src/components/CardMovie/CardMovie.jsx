/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Card, Image, Typography } from 'antd';
import { format } from 'date-fns';

const CardMovie = ({ itemProps }) => {
  const { id, title, overview, release_date, poster_path } = itemProps;

  const { Title, Text, Paragraph } = Typography;

  return (
    <>
      <Card className='cardContainer' hoverable>
        <Image
          className='cardImage'
          width={183}
          height={281}
          alt='example'
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
        <div className='cardDescriptionWrapper'>
          <div className='cardDescriptionTop'>
            <div className='cardHeadline'>
              <Title className='movieItemTitle' level={5}>
                {title}
              </Title>
            </div>
            <div className='releaseDate'>
              {' '}
              {release_date ? format(new Date(release_date), 'MMMM d, y') : 'дата выхода неизвестна'}
            </div>
            {/* <div className='genresWrapper'>Action</div> */}
          </div>
          <Paragraph className='overview'>{overview}</Paragraph>
        </div>
      </Card>
    </>
  );
};

export default CardMovie;

/*
  <Card bordered={false}>

        <Image
          width={183}
          height={281}
          src={
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/39da7a43-c6ff-45e1-a0d2-53a8ae43b0fb/600x900'
          }
          fallback={noImage}
        />

        <div className='card__info'>
          <Title level={5}>The way back</Title>
          <Text>March 5, 2020 </Text>
          <div className='ant-tag-wrapper'>Action</div>
          <Paragraph>
            A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
            attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...
          </Paragraph>
        </div>
      </Card>
 */
