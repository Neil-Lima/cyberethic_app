import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function SobreCyberethic() {
  return (
    <>
      <div>
        <Card
          className="card"
          style={{
            marginTop: "0px",
            color: "rgba(255,255,255,0)",
            background: "rgba(255,255,255,0)",
            marginBottom: "20px",
            border: "none",
          }}
        >
          <Card.Body style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
            <Container className="py-4 py-xl-5">
              <Row className="gy-4 gy-md-0">
                <Col md={6}>
                  <div className="p-xl-5 m-xl-5">
                    <Card.Img
                      className="rounded img-fluid w-100 fit-cover"
                      style={{ minHeight: "300px" }}
                      src="https://amincode.com/html/flex-it/assets/images/about/3.png"
                    />
                  </div>
                </Col>
                <Col md={6} className="d-md-flex align-items-md-center">
                  <div style={{ maxWidth: "350px" }}>
                    <h2 className="text-uppercase fw-bold">SOBRE NÓS</h2>
                    <p className="my-3">
                      Atuando no mercado por 10 anos, a Cyberethic Consultoria tem
                      atendido diversos clientes adequando-se facilmente,
                      focados na entrega e agregando valor ao produto do cliente
                      ou atuando como fábrica de software. Trabalhamos
                      internamente com equipes no modelo Ágil e com
                      profissionais muito experientes capazes de gerenciar e
                      entregar com precisão projetos complexos em prazo hábil.
                      Somos especialistas em desenvolvimento em nuvem e projetos
                      de alta disponibilidade e escalabilidade, seja no backend,
                      frontend, mobile e Arquitetura cloud DevOps.
                    </p>
                    <Button variant="primary" className="btn-lg me-2">
                      Currículo
                    </Button>
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
