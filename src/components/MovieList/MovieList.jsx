import React, { useEffect, useState } from 'react';
import { Col, Row, Spin, Alert, Pagination } from 'antd';

import CardMovie from '../CardMovie/CardMovie';

import './MovieList.css';

const MoviesList = ({ movies, error, loading, searchMovie, search, page, choosePage, totalPages, rateMovies }) => {
  const [colSpan, setColSpan] = useState(12);

  useEffect(() => {
    searchMovie(search, page);
    if (document.documentElement.clientWidth < 992) {
      setColSpan(24);
    }
  }, [search, page]);

  useEffect(() => {
    searchMovie(search, page);
  }, [search, page]);

  window.addEventListener('resize', () => {
    document.documentElement.clientWidth < 992 ? setColSpan(24) : setColSpan(12);
  });

  const elements = movies.map((item) => {
    return (
      <Col span={colSpan} key={item.id}>
        <CardMovie itemProps={item} rateMovies={rateMovies} />
      </Col>
    );
  });

  return (
    <div className='content'>
      {error ? (
        <Alert message='Упс! Что-то пошло не так!' type='error' />
      ) : loading ? (
        <Spin size='large' />
      ) : (
        <>
          <Row className='grid' gutter={[34, 34]}>
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
    </div>
  );
};

export default MoviesList;
