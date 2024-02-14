import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserShield, faIdCard, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Adicionei o ícone faArrowRight
import { Container, Row, Col } from 'react-bootstrap';
import Destaque from '../../../images/6.jpg';

function CartaoDestaqueCyberethic() {
  // Arrays com informações dos destaques
  const destaques = [
    {
      title: "Segurança de Dados",
      description: "Proteja suas informações e dados importantes contra ameaças cibernéticas.",
      icon: faLock // Ícone correspondente
    },
    {
      title: "Privacidade Online",
      description: "Mantenha sua privacidade online com nossas soluções de proteção de dados.",
      icon: faUserShield // Ícone correspondente
    },
    {
      title: "Gerenciamento de Identidade",
      description: "Controle e proteja o acesso às suas informações com nossas soluções de gerenciamento de identidade.",
      icon: faIdCard // Ícone correspondente
    }
  ];

  return (
    <Container className="py-4 py-xl-5">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <img className="rounded w-100 h-100 fit-cover" style={{ minHeight: '300px' }} src={Destaque} alt="Imagem de Destaque" />
        </Col>
        <Col className="d-flex flex-column justify-content-center p-4">
          {destaques.map((destaque, index) => (
            <div key={index} className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
              <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                <FontAwesomeIcon icon={destaque.icon} /> {/* Usando o ícone correspondente */}
              </div>
              <div>
                <h4>{destaque.title}</h4>
                <p>{destaque.description}</p>                
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default CartaoDestaqueCyberethic;
