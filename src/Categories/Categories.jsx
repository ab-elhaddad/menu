import React from 'react';
import CategoryButton from './CategoryButton';
import { Row, Col } from 'react-bootstrap';

const Categories = () => {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];
  return (
    <>
      <Row>
        <Col sm="12" className="d-flex justify-content-center py-4">
          {categories.map((el) => (
            <CategoryButton title={el} key={el} />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Categories;
