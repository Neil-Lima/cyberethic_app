import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import HeroHome from '../../../images/home-font.png'
function HeroCyberethic() {
  return (
    <>
      <Card className="mt-0" style={{ borderStyle: 'none', background: '#001f4d' }}>
        <Card.Body style={{ background: 'rgba(40,100,188,0)', padding: '0px', borderStyle: 'none' }}>
          <Container className="mt-5">
            <Row>
              <Col md={6}>
                <h1 style={{ fontSize: '52.36px', fontWeight: '900', marginTop: '58px', color: 'white' }}>Integrate your stack -&gt;automate your work</h1>
                <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '12px' }}>Evolve at speed and scale of your business with the leader in low-code automation</p>
              </Col>
              <Col md={6} lg={6} className="offset-lg-0"><img src={HeroHome} alt="home-font" style={{ width: '447px' }} /></Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default HeroCyberethic;
