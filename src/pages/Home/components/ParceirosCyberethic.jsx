import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import image3 from '../../../images/4.png';
import image4 from '../../../images/5.png';
import image7 from '../../../images/6.png';
import image2 from '../../../images/7.png';
import image1 from '../../../images/8.png';
import image6 from '../../../images/9.png';

function ParceirosCyberethic() {
  const backgroundImageStyle = {
    padding: '50px',
    background: 'url(https://img.freepik.com/vetores-gratis/particula-de-tecnologia-abstrata-realista-de-fundo_23-2148431735.jpg) center / cover no-repeat',
    backgroundAttachment: 'fixed' // faz o background ficar fixo quando a página rolar
  };

  // Array de imagens
  const images = [image3, image4, image7, image2, image1, image6];

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Nossos Parceiros</h2>
          </Col>
        </Row>
        <div className="card" style={backgroundImageStyle}>
          <div className="card-body" style={{ marginBottom: '0px' }}>
            <Container>

              {/* Renderização dos cards */}
              <Row style={{ padding: '10px' }}>
                {/* Mapeando o array de imagens para renderizar os cards */}
                {images.map((image, index) => (
                  <Col key={index}>
                    <Card style={{ width: '100%', height: '100%' }}>
                      <Card.Img variant="top" src={image} style={{ height: '100%', objectFit: 'cover' }} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ParceirosCyberethic;
