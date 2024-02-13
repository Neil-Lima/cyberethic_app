import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Avatar from 'react-avatar';

function TimeCyberethic() {
  return (
    <section id="team" className="bg-light-gray" style={{ padding: '40px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Time</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={4} className="text-center">
            <div className="team-member">
              <Avatar
                name="Kay Garland"
                size="150"
                round={true}
                style={{ margin: '0 auto 10px' }}
                src="https://example.com/Kay.jpg" // Substitua pelo URL da imagem de Kay Garland
              />
              <h4>Kay Garland</h4>
              <p className="text-muted">Lead Designer</p>
              <div style={{ padding: '0px', textAlign: 'center' }}>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px', marginRight: '10px' }} />
              </div>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            <div className="team-member">
              <Avatar
                name="Larry Parker"
                size="150"
                round={true}
                style={{ margin: '0 auto 10px' }}
                src="https://example.com/Larry.jpg" // Substitua pelo URL da imagem de Larry Parker
              />
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Marketer</p>
              <div style={{ padding: '0px', textAlign: 'center' }}>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px', marginRight: '10px' }} />
              </div>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            <div className="team-member">
              <Avatar
                name="Diana Pertersen"
                size="150"
                round={true}
                style={{ margin: '0 auto 10px' }}
                src="https://example.com/Diana.jpg" // Substitua pelo URL da imagem de Diana Pertersen
              />
              <h4>Diana Pertersen</h4>
              <p className="text-muted">Lead Developer</p>
              <div style={{ padding: '0px', textAlign: 'center' }}>
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px', marginRight: '10px' }} />
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px', marginRight: '10px' }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TimeCyberethic;
