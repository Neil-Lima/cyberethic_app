import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function TimeCyberethic() {
  const equipe = [
    {
      nome: 'Bruno Vieira',
      papel: 'Lead Designer',
      imagemSrc: '../../../images/417418139_1389259675052675_4232505973142057501_n.jpg',
      redesSociais: [
        { icone: faInstagram, link: 'https://www.instagram.com/kay_garland/' },
        { icone: faFacebook, link: 'https://www.facebook.com/kay.garland/' },
        { icone: faLinkedin, link: 'https://www.linkedin.com/in/kay-garland/' },
        { icone: faGithub, link: 'https://github.com/kaygarland/' }
      ]
    },
    {
      nome: 'Larry Parker',
      papel: 'Lead Marketer',
      imagemSrc: 'https://example.com/Larry.jpg',
      redesSociais: [
        { icone: faInstagram, link: 'https://www.instagram.com/larry_parker/' },
        { icone: faFacebook, link: 'https://www.facebook.com/larry.parker/' },
        { icone: faLinkedin, link: 'https://www.linkedin.com/in/larry-parker/' },
        { icone: faGithub, link: 'https://github.com/larryparker/' }
      ]
    },
    {
      nome: 'Diana Pertersen',
      papel: 'Lead Developer',
      imagemSrc: 'https://example.com/Diana.jpg',
      redesSociais: [
        { icone: faInstagram, link: 'https://www.instagram.com/diana_pertersen/' },
        { icone: faFacebook, link: 'https://www.facebook.com/diana.pertersen/' },
        { icone: faLinkedin, link: 'https://www.linkedin.com/in/diana-pertersen/' },
        { icone: faGithub, link: 'https://github.com/dianapertersen/' }
      ]
    }
  ];

  return (
    <section id="team" className="bg-light-gray" style={{ padding: '40px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Time</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {equipe.map((membro, index) => (
            <Col key={index} sm={4} className="text-center">
              <div className="team-member">
                <Image
                  src={membro.imagemSrc}
                  roundedCircle
                  style={{ margin: '0 auto 10px', width: '150px', height: '150px' }}
                />
                <h4>{membro.nome}</h4>
                <p className="text-muted">{membro.papel}</p>
                <div style={{ padding: '0px', textAlign: 'center' }}>
                  {membro.redesSociais.map((redeSocial, index) => (
                    <a key={index} href={redeSocial.link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={redeSocial.icone} style={{ fontSize: '20px', marginRight: '10px' }} />
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TimeCyberethic;
