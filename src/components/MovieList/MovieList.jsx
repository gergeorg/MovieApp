import React from 'react';
import { Col, Row } from 'antd';

import CardMovie from '../CardMovie/CardMovie';

const MoviesList = ({ movies }) => {
  const elements = movies.map((item) => {
    return (
      <Col key={item.id}>
        <CardMovie itemProps={item} />
      </Col>
    );
  });

  return (
    <>
      <Row>{elements}</Row>
    </>
  );
};

export default MoviesList;
