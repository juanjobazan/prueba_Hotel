import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../css/Cards.css'
import { Formik } from 'formik'
import userSchemaReserva from '../helpers/validationSchemaReserva';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ProductPage = () => {
  console.log('si')
  const params = useParams()
  const navigate = useNavigate()
  const [habi,setHabis]=useState({})
  const getOneHabitacion = async()=>{
    console.log('si')
    const res = await axios.get(`http://localhost:3000/api/habitacion/${params.id}`)
    setHabis(res.data.getHabitacion)
  }
/*   const handleSubmit = () =>{
    const token = JSON.parse(localStorage.getItem('token')) || ''
    if(!token){
      navigate('/login')
    }else{
      navigate('/cart')
    }
  } */
  useEffect(()=>{
    getOneHabitacion()
  },[])
  return (
    <>
      <Formik
        initialValues={{ inicio: '', fin: '' }}
        validationSchema={userSchemaReserva}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <div className='container detalle-habitacion'>
            <h1 className='text-center mt-5'>Detalle de Habitacion (nombre)</h1>
            <hr />

            <Card key={habi.id} className='detalle-habitacion '>
              <Card.Img variant="top" src={habi.imagen}/>
              <Card.Body>
                <Card.Title>{habi.numero} - {habi.nombre}</Card.Title>
                <Card.Text>
                    {habi.descripcion}
                </Card.Text>
                <Card.Text>
                  {habi.capacidad}
                </Card.Text>
                <Card.Text>
                  {habi.precio}
                </Card.Text>

              </Card.Body>
            </Card>
            <hr />
            <div className=' d-flex justify-content-center'>
              <Form className='w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Seleccione las Fechas de Ingreso y de Salida</Form.Label>
                  <Form.Label>Desde</Form.Label>
                  <Form.Control type="date" name='inicio'value={values.inicio} className={errors.inicio && touched.inicio && errors.inicio && 'is-invalid'} onChange={handleChange}  />
                  <small className='text-danger'>{errors.inicio && touched.inicio && errors.inicio}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Hasta</Form.Label>
                  <Form.Control type="date" name='fin' value={values.fin} className={errors.fin && touched.fin && errors.fin && 'is-invalid'} onChange={handleChange} />
                  <small className='text-danger'>{errors.fin && touched.fin && errors.fin}</small>
                </Form.Group>
                <Button type='submit' className='w-100' onClick={handleSubmit}>Reservar</Button>
              </Form>
            </div>

            <hr />
          </div>
        )}
      </Formik>

    </>

  )
}

export default ProductPage
