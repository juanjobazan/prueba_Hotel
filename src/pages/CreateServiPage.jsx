import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import axios from 'axios';
import '../css/RegisterPage.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import serviSchema from '../helpers/validationSchemaYupServi';
import clienteAxios, { config } from '../../utils/axiosCliente';

const CreateServiPage = () => {
    const navigate = useNavigate()
    const sendFormRegister = async (values) => {
        try {
           
            const res = await clienteAxios.post('/servicio', values,config)
           
            if (res.status === 200) {
                Swal.fire(
                  res.data.msg,
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

  return (
  <>
    <Formik
                initialValues={{ codigo: '', nombre: '', descripcion: '', precio: '' }}
                validationSchema={serviSchema}
                onSubmit={(values) => sendFormRegister(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <div className="d-flex justify-content-center mt-5 formulario">
                        <Form className="w-25">
                            <h5 className='mb-3'>Alta de Servicios</h5>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    Codigo</Form.Label>
                                <Form.Control type="number" name='codigo' value={values.codigo} className={errors.codigo && touched.codigo && errors.codigo && 'is-invalid'} onChange={handleChange} />
                                <small className='text-danger'> {errors.codigo && touched.codigo && errors.codigo}</small>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>
                                    Nombre</Form.Label>
                                <Form.Control type="text" name="nombre" value={values.nombre} className={errors.nombre && touched.nombre && errors.nombre && 'is-invalid'} onChange={handleChange} />
                                <small className='text-danger'>{errors.nombre && touched.nombre && errors.nombre}</small>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>
                                    Descripcion</Form.Label>
                                <Form.Control type="text" name="descripcion" value={values.descripcion} className={errors.descripcion && touched.descripcion && errors.descripcion && 'is-invalid'} onChange={handleChange} />
                                <small className='text-danger'>{errors.descripcion && touched.descripcion && errors.descripcion}</small>
                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>
                                    Precio</Form.Label>
                                <Form.Control type="number" name="precio" value={values.precio} className={errors.precio && touched.precio && errors.precio && 'is-invalid'} onChange={handleChange} />
                                <small className='text-danger'>{errors.precio && touched.precio && errors.precio}</small>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 my-3" onClick={handleSubmit}>
                                Crear
                            </Button>
                        </Form>
                    </div>
                )}
            </Formik>
  </>
  )
}

export default CreateServiPage
