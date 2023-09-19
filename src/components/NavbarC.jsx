import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'


const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="color-nav-personalizado">
        <Container>
          <Navbar.Brand to="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/user" className={'nav-link'}>Inicio</NavLink>
              <NavLink to="/about" className={'nav-link'}>Nosotros</NavLink>
              <NavLink to="/contact" className={'nav-link'}>Contacto</NavLink>
              <NavLink to="/" className={'nav-link'}>Galeria de Imagenes</NavLink>
              <NavLink to="/" className={'nav-link'}>Catalogo de Habitaciones</NavLink>
            </Nav>


            <Nav className="ms-auto">
              <NavLink to="/login" className={'nav-link'}>Iniciar Sesion</NavLink>
              <NavLink to="/register" className={'nav-link'}>Registrarse</NavLink>
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarC
