import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const slides = [
  {
    image: 'https://blog.eseg.edu.br/wp-content/uploads/2021/12/como-e-trabalhar-com-programacao.png',
    title: 'ESPECIALISTAS EM Desenvolvimento de Software',
    description: 'Possuímos profissionais com ótimo perfil técnico e adequados ao projeto do cliente, seja alocados na equipe do cliente ou em projetos com a gestão da Viana Consultoria.'
  },
  {
    image: 'https://srconsultoriafinanceira.com.br/wp-content/uploads/2016/06/sr-consultoria-financeira-imagem-001.jpg',
    title: 'SOMOS A Viana Consultoria',
    description: 'Consultoria - Especialistas em soluções de TI, Treinamentos e Outsourcing. Auxiliamos a sua empresa a tomar decisões em TI, análise de tecnologias e levantamento de requisitos.'
  }
];

function SlideCyberethic() {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 30, 0.5)', // Tom escuro meio azulado meio transparente
  };

  return (
    <Container fluid className="p-0">
      <Carousel interval={6000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={slide.image}
                alt="Slide Image"
                style={{ objectFit: 'cover', height: '600px' }}
              />
              <div style={overlayStyle} /> {/* Camada de sobreposição */}
            </div>
            <Carousel.Caption className="carousel-caption">
              <Container className="h-100">
                <Row className="h-100">
                  <Col md={6} xl={4} className="offset-md-2">
                    <div style={{ maxWidth: '350px' }}>
                      <h1 className="text-uppercase fw-bold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{slide.title}</h1> {/* Adicionar margem inferior */}
                      <p className="my-3" style={{ fontSize: '1.5rem', width:"500px" }}>{slide.description}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default SlideCyberethic;
