import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Meal = ({ el }) => {
  const { title, description, img, price } = el;
  return (
    <div className="py-3">
      <Fade>
        <Col sm="12">
          <Card className="d-flex flex-row">
            <Col>
              <Card.Img variant="top" className="meal-img" src={img} />
            </Col>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                <div>{title}</div>
                <div className="price">{price} LE.</div>
              </Card.Title>
              <Card.Text className="my-3">{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Fade>
    </div>
  );
};

export default Meal;
