import { Container, Row } from 'react-bootstrap'
import CardsC from '../components/CardsC'
import ServC from '../components/ServC'
import '../css/User.css'


const UserPage = () => {
  return (
    <>
      <Container className='main d-flex'>
        <Row>
          <h4>Habitaciones</h4>
          <hr />
          <CardsC />
          <h4>Servicios</h4>
          <hr />
          <ServC />
          <hr />
        </Row>
      </Container>
    </>
  )
}

export default UserPage
