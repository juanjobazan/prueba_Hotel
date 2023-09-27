import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import userSchemaContacto from '../helpers/validationSchemaContacto';

const ContactPage = () => {
  return (
    <>
      <Formik
        initialValues={{ nombre: '', email: '', fono: '', motivo: '', tarea: '' }}
        validationSchema={userSchemaContacto}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <div className="container my-3">
            <div className="row text-center">
              <div className='d-flex justify-content-center mt-5 formulario'>
                <Form>
                  <img src='https://nossahotel.com/wp-content/uploads/2022/12/NOSSA-logo-wh-29.png' width="100" height="60"></img>
                  <h5>Contactanos!!</h5>
                  <hr />
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" name='nombre' value={values.nombre} className={errors.nombre && touched.nombre && errors.nombre && 'is-invalid'} onChange={handleChange} maxLength={30} />
                    <small className='text-danger'>{errors.nombre && touched.nombre && errors.nombre}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="correo" name='email' value={values.email} className={errors.email && touched.email && errors.email && 'is-invalid'} onChange={handleChange} maxLength={30} />
                    <small className='text-danger'>{errors.email && touched.email && errors.email}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" name='fono' value={values.fono} className={errors.fono && touched.fono && errors.fono && 'is-invalid'} onChange={handleChange} maxLength={5}/>
                    <small className='text-danger'>{errors.fono && touched.fono && errors.fono}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Motivo</Form.Label>
                    <Form.Control type="text" name='motivo' value={values.motivo} className={errors.motivo && touched.motivo && errors.motivo && 'is-invalid'} onChange={handleChange} maxLength={18} />
                    <small className='text-danger'>{errors.motivo && touched.motivo && errors.motivo}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descipcion</Form.Label>
                    <Form.Control as="textarea" rows={3} name='tarea' value={values.tarea} className={errors.tarea && touched.tarea && errors.tarea && 'is-invalid'} onChange={handleChange} maxLength={150} />
                    <small className='text-danger'>{errors.tarea && touched.tarea && errors.tarea}</small>
                  </Form.Group>

                  <Button className='w-100 my-3' type='submit' onClick={handleSubmit} >Enviar</Button>
                  <hr />


                </Form>


              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default ContactPage
