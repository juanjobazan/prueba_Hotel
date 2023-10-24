import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../css/Cards.css'
import { Formik } from 'formik'
import userSchemaReserva from '../helpers/validationSchemaReserva';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../../utils/axiosCliente';


const ProductPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [habi, setHabis] = useState([])

  const sendForm = async (values) => {
    if (!token) return navigate('/login')

    try {
      const idUser = JSON.parse(localStorage.getItem('id'))
      const resUser = await clienteAxios.get(`/user/${idUser}`,config)
      console.log(resUser.data.idReserva)
      console.log(habi._id)
      console.log(values)

      const reReserva = await clienteAxios.post(`/reserva/${resUser.data.idReserva}/${habi._id}`, values,config)

      if (reReserva.status === 200) {
        Swal.fire(
          reReserva.data.msg,
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

    const getOneHabitacion = async () => {
      const res = await clienteAxios.get(`/habitacion/${params.id}`,config)
      setHabis(res.data)

    }
    getOneHabitacion()

  }, [])

  useEffect(() => {

  }, [habi])

  return (
    <>
      <Formik
        initialValues={{ ingreso: '', salida: '' }}
        validationSchema={userSchemaReserva}
        onSubmit={(values) => sendForm(values)}

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,

        }) => (

          <div className='container detalle-habitacion'>
            <h1 className='text-center mt-5'>Detalle de Habitacion {habi.nombre}-{habi.numero}</h1>
            <hr />
            {habi && (
              <Card className='detalle-habitacion '>
                <Card.Img variant="top" src={habi.imagen} />
                <Card.Body>
                  <Card.Title>
                    Nombre: {habi.nombre} - Numero: {habi.numero}
                  </Card.Title>
                  <Card.Text>
                    Precio  $AR - {habi.precio}
                  </Card.Text>
                  <Card.Text>
                    Descripcion: {habi.descripcion}
                  </Card.Text>
                  Capacidad: {habi.capacidad} personas
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
              </Card>
            )}






            <hr />
            <div className=' d-flex justify-content-center'>
              <Form className='w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Seleccione las Fechas de Ingreso y de Salida</Form.Label>
                  <Form.Label>Desde</Form.Label>
                  <Form.Control type="date" name='ingreso' value={values.ingreso} className={errors.ingreso && touched.ingreso && errors.ingreso && 'is-invalid'} onChange={handleChange} />
                  <small className='text-danger'>{errors.ingreso && touched.ingreso && errors.ingreso}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Hasta</Form.Label>
                  <Form.Control type="date" name='salida' value={values.salida} className={errors.salida && touched.salida && errors.salida && 'is-invalid'} onChange={handleChange} />
                  <small className='text-danger'>{errors.salida && touched.salida && errors.salida}</small>
                </Form.Group>
                <Button type='submit' className='w-100' onClick={handleSubmit}>Reservar</Button>
                <hr />
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
