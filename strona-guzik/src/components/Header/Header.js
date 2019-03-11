import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Row>
              <Col>
                <div className="header-name">
                  <h1>DANIEL GUZIK</h1>
                </div>
              </Col>
            </Row>
        </Container>
    );
};

export default Header;