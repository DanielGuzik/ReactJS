import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import page404 from '../../images/404Page.png';

const NoMatch = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={page404} className="ui image page404" alt="Page404"></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Błądzisz!</h1>
                    <h2>Lepiej wróc na stronę główną - <Link to="/">KLIK</Link></h2>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;