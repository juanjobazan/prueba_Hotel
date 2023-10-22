import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Serv.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const ServicePage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [servi, setServis] = useState([])
  const token = localStorage.getItem('token')


  useEffect(() => {
    const getOneServicio = async () => {
      if (!token) return navigate('/login')
      const res = await axios.get(`http://localhost:3000/api/servicio/${params.id}`)
      setServis(res.data)
    }
    getOneServicio()
  }, [])

  const handleClick = async (id) => {
    try {
      const idUser = JSON.parse(localStorage.getItem('id'))
      const resUser = await axios.get(`http://localhost:3000/api/user/${idUser}`)

      const resCartServi = await axios.post(`http://localhost:3000/api/cartServicio/${resUser.data.idCartServicio}/${id}`)

      if (resCartServi.status === 200) {
        Swal.fire(
          resCartServi.data.msg,
          '',
          'success'
        )
        navigate('/')
      }
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oooops..',
          text: error.response.data.msg
        })
      }
    }
  }

  useEffect(() => {

  }, [servi])

  return (
    <>
      <div className="container detalle-servicio ">
        <h1 className='text-center mt-5'>Detalle de Servicio- {servi.nombre} - {servi.codigo}</h1>
        <hr />
        <Card className='d-flex detalle-servicio'>
          <Card.Img variant="top" src={servi.imagen} />
          <Card.Body>
            <hr />
            <Card.Title>Nombre: {servi.nombre} - Codigo: {servi.codigo}</Card.Title>
            <Card.Text>
              Descripcion: {servi.descripcion}
            </Card.Text>
            <Card.Text>
              Precio: $ AR {servi.precio}
            </Card.Text>
            <hr />
            <Button variant="primary" onClick={() => handleClick(servi._id)} >Contratar Servicio</Button>
          </Card.Body>
        </Card>
        <hr />
      </div>
    </>
  )
}

export default ServicePage
