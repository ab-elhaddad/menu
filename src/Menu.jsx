import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Menu = () => {
  return (
    <>
      <Row>
        <Col
          sm="12"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div className="menu">Menu</div>
          <div className="underline"></div>
        </Col>
      </Row>
    </>
  );
};

export default Menu;
