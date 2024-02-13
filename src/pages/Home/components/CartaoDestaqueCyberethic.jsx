import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Destaque from '../../../images/6.jpg'
function CartaoDestaqueCyberethic() {
  return (
    <Container className="py-4 py-xl-5">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <img className="rounded w-100 h-100 fit-cover" style={{ minHeight: '300px' }} src={Destaque} alt="Imagem de Destaque" />
        </Col>
        <Col className="d-flex flex-column justify-content-center p-4">
          <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
              <h4>Segurança de Dados</h4>
              <p>Proteja suas informações e dados importantes contra ameaças cibernéticas.</p>
              <a href="#">Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>
          <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
              <h4>Privacidade Online</h4>
              <p>Mantenha sua privacidade online com nossas soluções de proteção de dados.</p>
              <a href="#">Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>
          <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
              <h4>Prevenção de Fraudes</h4>
              <p>Detecte e previna fraudes online com nossas ferramentas avançadas.</p>
              <a href="#">Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartaoDestaqueCyberethic;
