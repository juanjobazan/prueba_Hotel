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
          <NavLink to="/"><img src='https://nossahotel.com/wp-content/uploads/2022/12/NOSSA-logo-wh-29.png' width="100" height="60"></img></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={'nav-link'}>Inicio</NavLink>
              <NavLink to="/about" className={'nav-link'}>Nosotros</NavLink>
              <NavLink to="/contact" className={'nav-link'}>Contacto</NavLink>
              <NavLink to="/" className={'nav-link'}>Habitaciones</NavLink>
              <NavLink to="/" className={'nav-link'}>Servicios</NavLink>
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
