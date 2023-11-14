import userSchemaRegister from '../helpers/validationSchemaYupRegister'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import axios from 'axios';
import '../css/RegisterPage.css'
import Swal from 'sweetalert2';
import { NavLink, Navigate, redirect, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import clienteAxios, { config } from '../../utils/axiosCliente';

const RegisterPage = () => {
  const sendFormRegister = async (values) => {
    const navigate = useNavigate
    const { password, rpassword } = values



    try {

      if (password === rpassword) {

        const res = await clienteAxios.post('/user', values, config)

        if (res.status === 201) {

          Swal.fire({
            icon: "success",
            title: "¡Registro exitoso!",
            text: "Ya puedes iniciar sesión",
            showConfirmButton: false,
            timer: 1500,
          });
          
        }
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Coinciden las Contraseñas!',


        })
      }



    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o Email, YA Existe!',


      })

    }
  }






  return (
    <Formik
      initialValues={{ user: '', password: '', rpassword: '', email: '' }}
      validationSchema={userSchemaRegister}
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
            <h5 className='mb-3'>Formulario de Registro</h5>
            <Form.Group className="mb-3" controlId="formRegisterUserID">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                Usuario</Form.Label>
              <Form.Control type="text" name='user' value={values.user} className={errors.user && touched.user && errors.user && 'is-invalid'} onChange={handleChange} />
              <small className='text-danger'> {errors.user && touched.user && errors.user}</small>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterEmailId">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
                Email</Form.Label>
              <Form.Control type="email" name="email" value={values.email} className={errors.email && touched.email && errors.email && 'is-invalid'} onChange={handleChange} />
              <small className='text-danger'>{errors.email && touched.email && errors.email}</small>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterPassId">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                Contraseña</Form.Label>
              <Form.Control type="password" name="password" value={values.password} className={errors.password && touched.password && errors.password && 'is-invalid'} onChange={handleChange} />
              <small className='text-danger'>{errors.password && touched.password && errors.password}</small>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterRPassword">
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                Repetir Contraseña</Form.Label>
              <Form.Control type="password" name="rpassword" value={values.rpassword} className={errors.rpassword && touched.rpassword && errors.rpassword && 'is-invalid'} onChange={handleChange} />
              <small className='text-danger'>{errors.rpassword && touched.rpassword && errors.rpassword}</small>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 my-3" onClick={handleSubmit}>
              Registrarse
            </Button>
          </Form>
        </div>
      )}
    </Formik>

  )
}

export default RegisterPage
