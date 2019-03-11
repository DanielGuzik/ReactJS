import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

class PortfolioItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { image, alt, title, description, client, demo } = this.props

    return (
      <>
        <li className="portfolio-item" onClick={this.handleShow}>
          <Container>
            <Row>
              <Col md={4}>
                <img src={image} className="ui image-list" alt={alt} />
              </Col>
              <Col md={8}>
                <h4 className="portfolio-title">{title}</h4>
                <p className="portfolio-description">{description.slice(0, 125) + '[...]'}</p>
              </Col>
            </Row>
          </Container>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">

          <Modal.Header closeButton className="modal-header">
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-body">
            <Container>
              <Row>
                <Col md={4}>
                  <img src={image} className="ui image-modal" alt={alt} />
                </Col>
                <Col md={8}>
                  <p className="portfolio-description">{description}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <div>
              <h5>Klient:</h5> <span>{client}.</span>
            </div>
            <div>
              <a href={demo} target="_blank" rel="noopener noreferrer">Zobacz demo</a>
            </div>
            <div>
              <Button variant="secondary" size="sm" onClick={this.handleClose}>Zamknij</Button>
            </div>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
}

export default PortfolioItem;