import React from 'react';
import { Navbar, Container, Nav, Form, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function NavCyberthic() {
  return (
    <>
      <Navbar expand="md" fixed="top" className="py-3" style={{ background: 'linear-gradient(to bottom right, #001f4d, #000000)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' , color: 'white', padding: '0px' }}>
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faStar} style={{ color: 'white', marginRight: '10px' }} />
            <span style={{ color: 'white' }}>CYBERETHIC</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navcol-2" />
          <Navbar.Collapse id="navcol-2" className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="active" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Sobre nós</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Soluções</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Serviços</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Portfolio</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSun} style={{ marginRight: '6px', fontSize: '22px' }} />
              <ButtonGroup toggle>
                <ToggleButton type="checkbox" variant="light" />
              </ButtonGroup>
              <FontAwesomeIcon icon={faMoon} style={{ marginLeft: '6px', fontSize: '22px' }} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavCyberthic;
