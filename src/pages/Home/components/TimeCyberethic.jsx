import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../../images/426563550_1389329695045673_3238647983382331614_n.jpg';
import image2 from '../../../images/426570609_1389329625045680_5224286848256128243_n.jpg';
import image3 from '../../../images/426575990_1389329661712343_232145835788282410_n.jpg';

const teamMembers = [
  {
    name: 'Kay Garland',
    position: 'Lead Designer',
    imageSrc: image1,
    socialMedia: [
      { icon: faInstagram },
      { icon: faFacebook },
      { icon: faLinkedin },
      { icon: faGithub }
    ]
  },
  {
    name: 'Larry Parker',
    position: 'Lead Marketer',
    imageSrc: image2,
    socialMedia: [
      { icon: faInstagram },
      { icon: faFacebook },
      { icon: faLinkedin },
      { icon: faGithub }
    ]
  },
  {
    name: 'Diana Pertersen',
    position: 'Lead Developer',
    imageSrc: image3,
    socialMedia: [
      { icon: faInstagram },
      { icon: faFacebook },
      { icon: faLinkedin },
      { icon: faGithub }
    ]
  }
];

const TimeCyberethic = () => {
  return (
    <section id="team" className="bg-light-gray" style={{ padding: '40px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Time</h2>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col sm={4} key={index} className="d-flex flex-column align-items-center">
              <div className="team-member text-center">
                <img className="rounded-circle img-fluid" src={member.imageSrc} alt={member.name} style={{ width: '100px', height: '100px' }} />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.position}</p>
              </div>
              <div className="social-media-icons text-center">
                {member.socialMedia.map((social, index) => (
                  <FontAwesomeIcon key={index} icon={social.icon} style={{ fontSize: '20px', marginRight: '10px' }} />
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TimeCyberethic;
