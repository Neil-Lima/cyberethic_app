import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroHome from '../../../images/home-font.png';

function HeroCyberethic() {
  return (
    <div>
      <Card className="mt-0" style={{ borderStyle: 'none', background: 'linear-gradient(to bottom right, #001f4d, #000000)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
        <Card.Body style={{ background: 'rgba(40,100,188,0)', padding: '0px', borderStyle: 'none' }}>
          <Container className="mt-5">
            <Row>
              <Col md={6}>
                <h1 style={{ fontSize: '52.36px', fontWeight: '900', marginTop: '58px', color: 'white' }}>Integrate your stack -&gt;automate your work</h1>
                <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '12px', color: 'white' }}>Evolve at speed and scale of your business with the leader in low-code automation</p>
              </Col>
              <Col md={6} lg={6} className="offset-lg-0"><img src={HeroHome} alt="home-font" style={{ width: '447px' }} /></Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <svg viewBox="0 0 1440 185" preserveAspectRatio="none" fill="url(#gradient)" version="1.1" xmlns="http://www.w3.org/2000/svg" className="d-block text-primary" width="100%" height="160">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#001f4d' }} />
            <stop offset="100%" style={{ stopColor: '#000000' }} />
          </linearGradient>
        </defs>
        <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
      </svg>
    </div>
  );
}

export default HeroCyberethic;