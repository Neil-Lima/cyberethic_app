import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import aboutImage from '../../../images/about.jpg';

function SobreEmpresaCyberethic() {
  return (
    <>
      <div className="card" style={{ background: "rgba(255,255,255,0)" }}>
        <div className="card-body">
          <Container style={{ marginTop: "100px" }}>
            <Row>
              <Col md={6}>
                <h1 style={{ marginTop: "30px", color: "#fff" }}>SOBRE A NOSSA EMPRESA</h1>
                <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "12px", color: "#fff" }}>Fornecer à sua empresa um serviço de TI de qualidade é a nossa paixão</p>
                <div style={{ padding: "0px" }}>
                  <h6 style={{ color: "#fff" }}>Serviços web</h6>
                  <ProgressBar now={80} label="80%" />
                </div>
                <div style={{ padding: "0px" }}>
                  <h6 style={{ color: "#fff" }}>Criação de softwares</h6>
                  <ProgressBar now={70} label="70%" variant="success" />
                </div>
                <div style={{ padding: "0px" }}>
                  <h6 style={{ color: "#fff" }}>Serviços cloud</h6>
                  <ProgressBar now={60} label="60%" variant="warning" />
                </div>
              </Col>
              <Col md={6} lg={6} className="offset-lg-0"><img src={aboutImage} style={{ width: "447px" }} alt="Sobre a empresa" /></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SobreEmpresaCyberethic;
