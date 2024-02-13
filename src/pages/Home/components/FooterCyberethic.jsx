import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function FooterCyberethic() {
  return (
    <footer style={{background: 'linear-gradient(to bottom right, #001f4d, #000000)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' , marginBottom: '-177px', padding:"15px" }}>
      <Container>
        <Row>
          <Col sm={6} md={4} className="footer-navigation">           
            <p className="company-name" style={{ color: 'var(--bs-white)' }}>Company Name © 2015 </p>
          </Col>
          <Col sm={6} md={4} className="footer-contacts">
            <div><FontAwesomeIcon icon={faMapMarker} className="footer-contacts-icon" />
              <p><span className="new-line-span">21 Revolution Street</span> Paris, France</p>
            </div>
            <div><FontAwesomeIcon icon={faPhone} className="footer-contacts-icon" />
              <p className="footer-center-info email text-start"> +1 555 123456</p>
            </div>
            <div><FontAwesomeIcon icon={faEnvelope} className="footer-contacts-icon" />
              <p><a href="#" target="_blank" style={{ color: 'var(--bs-white)' }}>support@company.com</a></p>
            </div>
          </Col>
          <Col md={4} className="footer-about">
            <h4>About the company</h4>
            <p style={{ color: 'var(--bs-white)' }}> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. </p>
            <div className="social-links social-icons">
              <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
              <a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterCyberethic;
