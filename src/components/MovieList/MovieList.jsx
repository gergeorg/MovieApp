import React from 'react';
import { Col, Row } from 'antd';
import './MovieList.module.css';

import CardMovie from '../CardMovie/CardMovie';

const MoviesList = ({ movies }) => {
  const elements = movies.map((item) => {
    return (
      <Col span={12} key={item.id}>
        <CardMovie itemProps={item} />
      </Col>
    );
  });

  return (
    <>
      <Row gutter={[36, 34]}>{elements}</Row>
    </>
  );
};

export default MoviesList;
