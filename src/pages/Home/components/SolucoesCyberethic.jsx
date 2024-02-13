import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const solucoes = [
  { title: 'Title 1', icon: faStar },
  { title: 'Title 2', icon: faStar },
  { title: 'Title 3', icon: faStar },
  { title: 'Title 4', icon: faStar },
  { title: 'Title 5', icon: faStar },
  { title: 'Title 6', icon: faStar }
];

function SolucoesCyberethic() {
  return (
    <>
      <Container className="py-4 py-xl-5" style={{ borderStyle: 'none', marginTop: '0px' }}>
        <Row className="mb-5">
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2>Soluções</h2>
          </Col>
        </Row>
        <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{ padding: '20px', borderStyle: 'none' }}>
          {solucoes.map((solucao, index) => (
            <Col key={index}>
              <div className="text-center shadow d-flex flex-column align-items-center align-items-xl-center" style={{ padding: '10px', border: '0.4px solid var(--bs-cyan)' }}>
                <div className="px-3"><FontAwesomeIcon icon={solucao.icon} style={{ fontSize: '22px', color: 'var(--bs-cyan)' }} />
                  <h4>{solucao.title}</h4>
                  <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default SolucoesCyberethic;
