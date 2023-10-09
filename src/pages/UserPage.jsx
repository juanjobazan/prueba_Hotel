import { Container, Row } from 'react-bootstrap'
import CardsC from '../components/CardsC'
import ServC from '../components/ServC'
import '../css/User.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


const UserPage = () => {
  const [habi, setHabis] = useState([])
  const [servi, setServis] = useState([])

  const getstoreApi = async () => {
    const res = await axios.get('http://localhost:3000/api/habitacion')
    setHabis(res.data)
  }
  const getServicio = async () => {
    const res = await axios.get('http://localhost:3000/api/servicio')
    setServis(res.data)
  }
  useEffect(() => {
    getstoreApi()
  }, [])

  useEffect(() => {
    getServicio()
  }, [])
  return (
    <>
      <Container className='main d-flex'>
        <Row>
          <h4>Habitaciones</h4>
          <hr />
          <CardsC arrayHabi={habi} />
          <h4>Servicios</h4>
          <hr />
          <ServC arraySer={servi} />
          <hr />
        </Row>
      </Container>
    </>
  )
}

export default UserPage
