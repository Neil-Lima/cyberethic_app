import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projetos = [
  {
    imgSrc: 'https://wallpapers.com/images/featured/social-cygatgouuo5s0pgb.jpg',
    title: 'Lorem libero donec',
    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    imgSrc: 'https://wallpapers.com/images/hd/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.jpg',
    title: 'Lorem libero donec',
    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    imgSrc: 'https://img.freepik.com/fotos-gratis/organizacao-do-dia-da-educacao-em-uma-mesa-com-espaco-de-copia_23-2148721266.jpg',
    title: 'Lorem libero donec',
    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  },
  {
    imgSrc: 'https://www.shutterstock.com/image-photo/law-600nw-633750290.jpg',
    title: 'Lorem libero donec',
    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
  }
];

function ProjetosCyberethic() {
  return (
    <Container className="py-4 py-xl-5">
      <Row className="mb-5">
        <Col md={8} xl={6} className="text-center mx-auto">
          <h2>Projetos</h2>
        </Col>
      </Row>
      <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {projetos.map((projeto, index) => (
          <Col key={index}>
            <Card className="shadow" style={{ backgroundColor: 'transparent', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', color: 'white' }}>
              <Card.Img variant="top" src={projeto.imgSrc} className="rounded img-fluid d-block w-100 fit-cover" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>{projeto.title}</Card.Title>
                <Card.Text>{projeto.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjetosCyberethic;
