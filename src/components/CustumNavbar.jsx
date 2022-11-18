import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidjet';



function CustumNavbar() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jabones de Gala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#category1">Category 1</Nav.Link>
            <Nav.Link href="#category2">Category 2</Nav.Link>
            <Nav.Link href="#category3">Category 3</Nav.Link>
            <Nav.Link href="#category4">Category 4</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#regiser">Register</Nav.Link>
            <Nav.Link href="#cart"><CartWidget  /> </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustumNavbar;