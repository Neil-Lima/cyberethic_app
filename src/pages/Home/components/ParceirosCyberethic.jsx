import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import image3 from '../../../images/3-white.png';
import image4 from '../../../images/4-white.png';
import image7 from '../../../images/7-white.png';
import image2 from '../../../images/2-white.png';
import image1 from '../../../images/1-white.png';
import image6 from '../../../images/6-white.png';

function ParceirosCyberethic() {
  const backgroundImageStyle = {
    padding: '50px',
    background: 'url(https://img.freepik.com/vetores-gratis/particula-de-tecnologia-abstrata-realista-de-fundo_23-2148431735.jpg) center / cover no-repeat',
    backgroundAttachment: 'fixed' // faz o background ficar fixo quando a página rolar
  };

  return (
    <>
    <Container>
      <div className="card" style={backgroundImageStyle}>
        <div className="card-body" style={{ marginBottom: '0px' }}>
          <Container>
            <Row style={{ padding: '10px' }}>
              <Col>
                <Card><Card.Img variant="top" src={image3} /></Card>
              </Col>
              <Col>
                <Card><Card.Img variant="top" src={image4} /></Card>
              </Col>
              <Col>
                <Card><Card.Img variant="top" src={image7} /></Card>
              </Col>
              <Col>
                <Card><Card.Img variant="top" src={image2} /></Card>
              </Col>
              <Col>
                <Card><Card.Img variant="top" src={image1} /></Card>
              </Col>
              <Col>
                <Card><Card.Img variant="top" src={image6} /></Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      </Container>
    </>
  );
}

export default ParceirosCyberethic;
