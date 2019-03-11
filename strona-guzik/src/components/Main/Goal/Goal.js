import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Goal.css';

const Goal = () => {
    return (
        <div className="container_goal">
            <Container>
                <Row className="rowBorderBottom">
                    <Col md={4}>
                        <h3>Cele życiowe:</h3>
                    </Col>
                    <Col md={8}>
                        <div className="lifeGoal">
                            <p>Żyć w zgodzie.</p>
                            <p>Posiadać tytuł naukowy z dziedziny IT.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h3 className="jobGoal">Cele zawodowe:</h3>
                    </Col>
                    <Col md={8}>
                        <p>Twórca innowacyjnych rozwiązań w świecie IT</p>
                    </Col>
                </Row>
            </Container>      
        </div>
    );
};

export default Goal;