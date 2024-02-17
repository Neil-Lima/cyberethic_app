import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import aboutImage from '../../../images/about.jpg';

function SobreEmpresaCyberethic() {
  const [progressBars, setProgressBars] = useState([]);

  useEffect(() => {
    const progressData = [
      { label: "Projetos Backend", percentage: 95, variant: "info" },
      { label: "Profissionais em Outsourcing", percentage: 80, variant: "success" },
      { label: "Gestão de projetos e Fábrica de Software", percentage: 60, variant: "warning" },
      { label: "Demais projetos", percentage: 70, variant: "danger" }
    ];
    setProgressBars(progressData);
  }, []);

  return (
    <div className="card" style={{ background: "rgba(255,255,255,0)" }} data-aos="fade-left">
      <div className="card-body">
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Col md={6}>
              <h1 style={{ marginTop: "30px", color: "#fff" }}>SOBRE A NOSSA EMPRESA</h1>
              <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "12px", color: "#fff" }}>Fornecer à sua empresa um serviço de TI de qualidade é a nossa paixão</p>
              {progressBars.map((item, index) => (
                <div key={index} style={{ padding: "0px" }}>
                  <h6 style={{ color: "#fff" }}>{item.label}</h6>
                  <ProgressBar animated now={item.percentage} label={`${item.percentage}%`} variant={item.variant} />
                </div>
              ))}
            </Col>
            <Col md={6} lg={6} className="offset-lg-0"><img src={aboutImage} style={{ width: "447px" }} alt="Sobre a empresa" /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SobreEmpresaCyberethic;
