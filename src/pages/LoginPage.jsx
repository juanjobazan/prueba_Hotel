import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik'
import userSchemaLogin from '../helpers/validationSchemaYupLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../../utils/axiosCliente';

const LoginPage = () => {
  const navigate = useNavigate()
  const sendForm = async (values) => {
    try {
      const res = await clienteAxios.post('/user/login', values,config)
    
      if (res.data?.token) {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('role', JSON.stringify(res.data.role))
        localStorage.setItem('id',JSON.stringify(res.data.id))
        if (res.data.role === 'admin') {
          navigate('/admin')
        } else {
          navigate('/user')
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o contraseña incorrecta',

      })

    }






  }
  return (
    <>
      <Formik
        initialValues={{ user: '', password: '' }}
        validationSchema={userSchemaLogin}
        onSubmit={(values) => sendForm(values)}
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
                  <h5>Inicio de Sesion</h5>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" name='user' value={values.user} className={errors.user && touched.user && errors.user && 'is-invalid'} onChange={handleChange} maxLength={18} />
                    <small className='text-danger'>{errors.user && touched.user && errors.user}</small>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name='password' value={values.password} className={errors.password && touched.password && errors.password && 'is-invalid'} onChange={handleChange} maxLength={18} />
                    <small className='text-danger'>{errors.password && touched.password && errors.password}</small>
                  </Form.Group>
                  <Button className='w-100 my-3' type='submit' onClick={handleSubmit}>Iniciar Sesion</Button>
                  <hr />
                  <NavLink to='/' className='nav-link' >Recuperar Contraseña</NavLink>
                  <hr />
                  <small>Iniciar Sesion con</small>
                  <br />
                  <NavLink to='/*' className='nav-link' ><small className='text-primary'>Facebook</small></NavLink>
                  <br />
                  <NavLink to='/*' className='nav-link'><small className='text-danger'>Google</small></NavLink>
                </Form>


              </div>
            </div>
          </div>
        )}
      </Formik>

    </>


  )
}


export default LoginPage
