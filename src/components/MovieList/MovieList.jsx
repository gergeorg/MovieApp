import React from 'react';
import { Col, Row, Spin, Alert } from 'antd';
import './MovieList.module.css';

import CardMovie from '../CardMovie/CardMovie';

const MoviesList = ({ movies, error, loading }) => {
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
        </>
      )}
    </>
  );
};

export default MoviesList;
