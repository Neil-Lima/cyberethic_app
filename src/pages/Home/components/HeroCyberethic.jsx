import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroHome from '../../../images/home-font.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroCyberethic() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ border: 'none', marginTop: "50px" }} data-aos="fade-right" >
        <Card className="mt-0" style={{ border: 'none', backgroundColor: '#001f4d', marginTop: "50px" }}>
          <Card.Body style={{ background: 'rgba(40,100,188,0)', padding: '0px', border: 'none' }}>
            <Container fluid className="mt-5">
              <Row>
                <Col xs={12} md={6}>
                  <h1 style={{ fontSize: '52.36px', fontWeight: '900', marginTop: '58px', color: 'white' }}>Transformando Ideias em Realidade Digital com CyberEthic</h1>
                  <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '12px', color: 'white' }}>Bem-vindo ao universo da CyberEthic, onde a inovação ganha vida. Somos uma equipe dedicada de especialistas em software, apaixonados por transformar suas ideias em soluções digitais de alto desempenho. Desde sistemas personalizados até websites dinâmicos, estamos aqui para impulsionar sua visão para o futuro digital. Descubra o poder da tecnologia aliada à ética em cada linha de código que escrevemos. Vamos moldar juntos o amanhã digital</p>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                  <img src={HeroHome} alt="home-font" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
      <svg data-aos="fade-right" viewBox="0 0 1440 185" preserveAspectRatio="none" fill="#001f4d" version="1.1" xmlns="http://www.w3.org/2000/svg" className="d-block text-primary" style={{ width: '100%' }}>
        <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
      </svg>
    </>
  );
}

export default HeroCyberethic;
