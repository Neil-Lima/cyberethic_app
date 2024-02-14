import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faServer, faDesktop, faCogs, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

function SolucoesCyberethic() {
  // Arrays com informações dos serviços
  const servicos = [
    {
      icon: faHandshake,
      title: "Outsourcing",
      description: "Flexibilidade e rapidez na contratação dos profissionais certos para cada projeto"
    },
    {
      icon: faServer,
      title: "Desenvolvimento WEB",
      description: "Possuímos uma equipe muito experiente e criativa nas mais diversas soluções nos frameworks do mercado"
    },    
    {
      icon: faCogs,
      title: "Fábrica de Software",
      description: "Especialistas em diversas linguagens com uma equipe completa, desde a análise de requisitos, controle de qualidade até o desenvolvimento ágil"
    },
    {
      icon: faAndroid,
      title: "Mobile Android",
      description: "Desenvolvimento de aplicações Android em linguagem nativa, POS, MDM Android"
    },
    {
      icon: faCloud,
      title: "Nuvem",
      description: "Trabalhamos com grandes profissionais especialistas nas principais cloud providers do mercado"
    },
    {
      icon: faCloud,
      title: "Licitações",
      description: "Trabalhamos com grandes profissionais especialistas nas principais cloud providers do mercado"
    }
  ];

  // Estado para controlar se o mouse está sobre cada serviço
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container className="py-4 py-xl-5">
      <Row className="mb-5">
        <Col md={8} xl={6} className="text-center mx-auto">
          <h2>Soluções</h2>
        </Col>
      </Row>
      <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {servicos.map((servico, index) => (
          <Col key={index}>
            <div
              className="text-center shadow d-flex flex-column align-items-center align-items-xl-center"
              style={{
                padding: '10px',
                border: '0.4px solid var(--bs-cyan)',
                backgroundColor: hoveredIndex === index ? 'var(--bs-cyan)' : 'transparent',
                color: hoveredIndex === index ? '#fff' : 'var(--bs-cyan)',
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                height: '100%', // Define a altura fixa para os cards
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="px-3" style={{ minHeight: '230px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={servico.icon} style={{ fontSize: '22px' }} />
                <h4>{servico.title}</h4>
                <p>{servico.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SolucoesCyberethic;
