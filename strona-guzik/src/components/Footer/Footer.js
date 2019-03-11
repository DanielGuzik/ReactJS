import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import github from '../../images/github.svg';
import reactIco from '../../images/favicon.ico';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div>
                        <p className="autograf">Created by <span>D. Guzik</span></p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer-social">
                        {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                        <a href="https://github.com/guzik2" target="_blank" rel="noopener noreferrer"><img src={github} className="social-icon" alt="facebook"></img></a>
                        <a href="https://www.linkedin.com/in/danielguzik/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="social-icon" alt="linkedin"></img></a>
                        <a href="https://www.facebook.com/guzik.dan" target="_blank" rel="noopener noreferrer"><img src={facebook} className="social-icon" alt="facebook"></img></a>
                        <a href="https://www.instagram.com/Dan.Guz/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="social-icon" alt="facebook"></img></a>
                        <a href="https://twitter.com/Dan_Guzik" target="_blank" rel="noopener noreferrer"><img src={twitter} className="social-icon" alt="twitter"></img></a>
                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <p>Powered by <img src={reactIco} alt="React icon" className="react-icon"></img>ReactJS</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;