import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Serv.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ServicePage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [servi, setServis] = useState([])

  useEffect(() => {
    const getOneServicio = async () => {
      const res = await axios.get(`http://localhost:3000/api/servicio/${params.id}`)
      setServis(res.data)
    }
    getOneServicio()
  }, [])

  useEffect(()=>{

  },[servi])

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
            <Button variant="primary" >Contratar Servicio</Button>
          </Card.Body>
        </Card>
        <hr />
      </div>
    </>
  )
}

export default ServicePage
