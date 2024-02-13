import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBezierCurve, faTrophy, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function StatsCyberethic() {
  return (
    <>
    <Container>
      <Card style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapers.com/images/hd/mirrored-skyscrapers-in-low-angle-xn331vsegdl9vss1.jpg') center / cover no-repeat fixed"}}>
        <Card.Body style={{background: "rgba(13,110,253,0.31)", color: "white"}}>
          <Container className="py-4 py-xl-5">
            <Row className="gy-4 row-cols-2 row-cols-md-4">
              <Col>
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                  <div className="px-3">
                    <h2 className="fw-bold mb-0">123+</h2>
                    <p className="mb-0">Projetos criados</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                    <FontAwesomeIcon icon={faBezierCurve} />
                  </div>
                  <div className="px-3">
                    <h2 className="fw-bold mb-0">45+</h2>
                    <p className="mb-0">Clientes</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>
                  <div className="px-3">
                    <h2 className="fw-bold mb-0">67+</h2>
                    <p className="mb-0">Erat netus</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <div className="px-3">
                    <h2 className="fw-bold mb-0">40</h2>
                    <p className="mb-0">Anos de experiências</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      </Container>
    </>
  );
}

export default StatsCyberethic;
