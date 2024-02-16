import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function SobreCyberethic() {
  return (
    <>
      <div>
        <Card className="card" style={{ marginTop: '0px', color: 'rgba(255,255,255,0)', background: 'rgba(255,255,255,0)', marginBottom: '20px', border: 'none' }}>
          <Card.Body style={{ color: 'rgb(255,255,255)', marginBottom: '0px' }}>
            <Container className="py-4 py-xl-5">
              <Row className="gy-4 gy-md-0">
                <Col md={6}>
                  <div className="p-xl-5 m-xl-5">
                    <Card.Img className="rounded img-fluid w-100 fit-cover" style={{ minHeight: '300px' }} src="https://amincode.com/html/flex-it/assets/images/about/3.png" />
                  </div>
                </Col>
                <Col md={6} className="d-md-flex align-items-md-center">
                  <div style={{ maxWidth: '350px' }}>
                    <h2 className="text-uppercase fw-bold">SOBRE NÓS</h2>
                    <p className="my-3">Na CyberEthic, estamos comprometidos em desenvolver soluções digitais inovadoras que impulsionam seu negócio para o sucesso. Combinamos tecnologia de ponta com uma abordagem ética para criar sistemas e sites que não apenas atendem às suas necessidades, mas também elevam a experiência do usuário a um novo patamar. Nossa paixão pela excelência nos impulsiona a superar expectativas e entregar resultados excepcionais. Junte-se a nós enquanto exploramos o futuro digital juntos.</p>
                    <Button variant="primary" className="btn-lg me-2">Currículo</Button>                    
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SobreCyberethic;
