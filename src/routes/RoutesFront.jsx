import { Routes, Route } from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'
import FooterC from '../components/FooterC'
import ProductPage from '../pages/ProductPage'
import ServicePage from '../pages/ServicePage'
import DetalleCompra from '../pages/DetalleCompra'
import PrivateRoute from '../components/PrivateRoute'

const RoutesFront = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/habitacion' element={<ProductPage />} />
        <Route path='/servicio' element={<ServicePage />} />
        <Route path='/compra' element={
          <PrivateRoute role='user'>
            <DetalleCompra />
          </PrivateRoute>
        } />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={
          <PrivateRoute role='user'>
            <UserPage />
          </PrivateRoute>
        } />
        <Route path='/admin' element={
          <PrivateRoute role='admin'>
            <AdminPage />
          </PrivateRoute>
        } />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <FooterC />
    </>
  )
}

export default RoutesFront
