import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidjet';
import {Link} from 'react-router-dom';

function CustumNavbar() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Jabones de Gala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="categoria/flores">Flores</Nav.Link>
            <Nav.Link as={Link} to="categoria/navidad">Navidad</Nav.Link>
            <Nav.Link as={Link} to="categoria/varios">Varios</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link> <CartWidget  /> </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustumNavbar;