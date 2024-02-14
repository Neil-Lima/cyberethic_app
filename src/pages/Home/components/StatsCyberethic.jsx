import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faTasks, faCoffee, faCode } from '@fortawesome/free-solid-svg-icons'; // Importar os ícones apropriados

function StatsCyberethic() {
  
  const statsData = [
    { icon: faUserCheck, value: "36", description: "Clientes Satisfeitos" },
    { icon: faTasks, value: "73", description: "Projetos Concluídos" },
    { icon: faCoffee, value: "297334", description: "Copos de Café" },
    { icon: faCode, value: "9823299", description: "Linhas de Código (Ainda contando...)" }
  ];

  return (
    <>
    <Container>
      <Card style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapers.com/images/hd/mirrored-skyscrapers-in-low-angle-xn331vsegdl9vss1.jpg') center / cover no-repeat fixed"}}>
        <Card.Body style={{background: "rgba(13,110,253,0.31)", color: "white"}}>
          <Container className="py-4 py-xl-5">
            <Row className="gy-4 row-cols-2 row-cols-md-4">
              {statsData.map((stat, index) => (
                <Col key={index}>
                  <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div className="px-3">
                      <h2 className="fw-bold mb-0">{stat.value}</h2>
                      <p className="mb-0">{stat.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
      </Container>
    </>
  );
}

export default StatsCyberethic;
