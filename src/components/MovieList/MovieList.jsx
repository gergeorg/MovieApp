import React, { useEffect } from 'react';
import { Col, Row, Spin, Alert, Pagination } from 'antd';
import './MovieList.module.css';

import CardMovie from '../CardMovie/CardMovie';

const MoviesList = ({ movies, error, loading, searchMovie, search, page, choosePage, totalPages }) => {
  useEffect(() => {
    searchMovie(search, page);
  }, [search, page]);

  const elements = movies.map((item) => {
    return (
      <Col span={12} key={item.id}>
        <CardMovie itemProps={item} />
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
          <Row gutter={[36, 34]}>{elements}</Row>

          <Pagination
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
