import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

function ContatoCyberethic() {
  return (
    <>

      <section className="position-relative py-4 py-xl-5" style={{ marginTop: '30px', background: `url('https://wallpapers.com/images/hd/dark-aesthetic-world-map-w1svazb2ay69orbw.jpg') center / cover no-repeat`, backgroundAttachment: 'fixed', color: 'var(--bs-white)', marginBottom: '0px' }}>

        <Container className="position-relative" style={{ background: 'rgba(52,58,64,0.72)' }}>
          <Row className="mb-5">
            <Col md={8} xl={6} className="text-center mx-auto">
              <h2>Contato</h2>
              <p className="w-lg-50">Entre em contato conosco ou nos faça uma visita, estamos sempre à disposição!</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={6} lg={4} xl={4}>
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0">Telefone</h6>
                    <p className="mb-0">11 96839-3942</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">Info@vianaconsultoriatech.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center p-3">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </div>
                  <div className="px-2">
                    <h6 className="mb-0">Endereço</h6>
                    <p className="mb-0">Ed. Village Executive, Av. Sen. Lemos, 443, Umarizal, Belém - PA</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={5} xl={4}>
              <div>
                <Form className="p-3 p-xl-4" method="post">
                  <Form.Group className="mb-3">
                    <Form.Control id="name-1" type="text" name="name" placeholder="Nome" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control id="email-1" type="email" name="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control id="message-1" as="textarea" name="message" rows="6" placeholder="Mensagem" />
                  </Form.Group>
                  <Button variant="primary" className="d-block w-100" type="submit">Enviar</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContatoCyberethic;
