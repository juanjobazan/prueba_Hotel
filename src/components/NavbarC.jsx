import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'


const NavbarC = () => {
  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token')) || ''
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    navigate('/')
  }
  
  return (
    <>
      <Navbar expand="lg" className="color-nav-personalizado">
        <Container>
          <NavLink to="/"><img src='https://nossahotel.com/wp-content/uploads/2022/12/NOSSA-logo-wh-29.png' width="100" height="60"></img></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {
              token
                ?
                <Nav className="me-auto">
                  <NavLink to={token ? "/user" : "/"} className={'nav-link'}>Inicio</NavLink>
                  <NavLink to="/habitacion" className={'nav-link'}>Habitaciones</NavLink>
                  <NavLink to="/servicio" className={'nav-link'}>Servicios</NavLink>
                  <NavLink to="/compra" className={'nav-link'}>Mis Reservas</NavLink>
                </Nav>
                :
                <Nav className="me-auto">
                  <NavLink to="/" className={'nav-link'}>Inicio</NavLink>
                  <NavLink to="/about" className={'nav-link'}>Nosotros</NavLink>
                  <NavLink to="/contact" className={'nav-link'}>Contacto</NavLink>
                  <NavLink to="/habitacion" className={'nav-link'}>Habitaciones</NavLink>

                </Nav>

            }



            <Nav className="ms-auto">
              {
                token

                  ?
                  <NavLink onClick={handleClick} className={'nav-link'}>Cerrar Sesion</NavLink>
                  :
                  <>
                    <NavLink to="/login" className={'nav-link'}>Iniciar Sesion</NavLink>
                    <NavLink to="/register" className={'nav-link'}>Registrarse</NavLink>
                  </>
              }

            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarC
