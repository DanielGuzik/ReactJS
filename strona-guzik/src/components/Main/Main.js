import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './Main.css';
import Description from './Description/Description';
import Goal from './Goal/Goal';
import PortfolioList from './Portfolio/PortfolioList';

const Main = () => {
    return (
        <Container>
            <Row> 
              <Col md={6}>
                <article>
                  <section>
                      <Description />
                  </section>
                </article>
              </Col>
              <Col md={6}>
                <article>
                  <section>
                    <Goal />
                  </section>
                  <section>
                    <h3 className="Portfolio-header">Portfolio</h3>
                    <PerfectScrollbar className="scrollbar">
                      <ul className="ui relaxed divided list selection portfolio-ul">
                        <PortfolioList />
                      </ul>
                    </PerfectScrollbar>
                  </section> 
                </article>
              </Col>
            </Row>
          </Container>
    );
};

export default Main;