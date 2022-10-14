import React, { useEffect } from 'react';
import { Col, Row, Spin, Alert, Pagination } from 'antd';

import CardMovie from '../CardMovie/CardMovie';

import './MovieList.css';

const MoviesList = ({ movies, error, loading, searchMovie, search, page, choosePage, totalPages, rateMovies }) => {
  useEffect(() => {
    searchMovie(search, page);
  }, [search, page]);

  const elements = movies.map((item) => {
    return (
      <Col span={12} key={item.id}>
        <CardMovie itemProps={item} rateMovies={rateMovies} />
      </Col>
    );
  });

  return (
    <>
      {error ? (
        <Alert message='Упс! Что-то пошло не так!' type='error' />
      ) : loading ? (
        <Spin size='large' />
      ) : (
        <>
          <Row className='grid' gutter={[36, 34]}>
            {elements}
          </Row>

          <Pagination
            className='pagination'
            current={page}
            onChange={(current) => {
              choosePage(current);
            }}
            defaultCurrent={1}
            total={totalPages}
            pageSize={20}
            showSizeChanger={false}
          />
        </>
      )}
    </>
  );
};

export default MoviesList;
