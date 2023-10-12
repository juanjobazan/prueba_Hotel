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
  const params = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const idRes = localStorage.getItem('id')
  const [habi, setHabis] = useState([])

  const sendForm = async (values) => {
    if (!token) return navigate('/login')

    try {
   
      const res = await axios.post(`http://localhost:3000/api/reserva/${idRes}/${params.id}`, values)
      
      if (res.status === 201) {
        Swal.fire(
          'Reservado',
          res.data.msg,
          'success'
        )
        navigate('/login')
      }
      Swal.fire(
        'error',
        'Oops...',
        res.data.msg

      )


    } catch (error) {

    }
  }
  useEffect(() => {

    const getOneHabitacion = async () => {
      const res = await axios.get(`http://localhost:3000/api/habitacion/${params.id}`)
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
