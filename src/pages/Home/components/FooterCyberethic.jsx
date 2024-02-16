import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function FooterCyberethic() {
  return (
    <>
      <footer data-aos="fade-left" style={{ background: 'linear-gradient(to bottom right, #001f4d, #000000)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', marginBottom: '-177px', padding: '15px' }}>
        <Container>
          <Row>
            <Col sm={6} md={4} className="footer-navigation">
              <h3><a href="#">Cyberethic</a></h3>
              <p className="company-name" style={{ color: 'var(--bs-white)' }}>CYBERETHIC © 2014</p>
            </Col>
            <Col sm={6} md={4} className="footer-contacts">
              <div style={{ marginBottom: '15px' }}>
                <FontAwesomeIcon icon={faMapMarker} className="footer-contacts-icon" />
                <p style={{ marginLeft: '10px', color: 'var(--bs-white)' }}> Ed. Village Executive, Av. Sen. Lemos, 443, Umarizal, Belém - PA</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <FontAwesomeIcon icon={faPhone} className="footer-contacts-icon" />
                <p className="footer-center-info email text-start" style={{ marginLeft: '10px', color: 'var(--bs-white)' }}> 11 96839-3942</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <FontAwesomeIcon icon={faEnvelope} className="footer-contacts-icon" />
                <p style={{ marginLeft: '10px', color: 'var(--bs-white)' }}><a href="#" target="_blank" style={{ color: 'var(--bs-white)' }}>Info@vianaconsultoriatech.com</a></p>
              </div>
            </Col>
            <Col md={4} className="footer-about">
              <h4>NOS SIGAM:</h4>
              <div className="social-links social-icons">
                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', fontSize: '24px', color: 'var(--bs-white)' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px', fontSize: '24px', color: 'var(--bs-white)' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', fontSize: '24px', color: 'var(--bs-white)' }} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px', fontSize: '24px', color: 'var(--bs-white)' }} /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterCyberethic;
