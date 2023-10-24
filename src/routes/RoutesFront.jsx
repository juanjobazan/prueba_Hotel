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
import AdminHabiPage from '../pages/AdminHabiPage'
import CreateHabiPage from '../pages/CreateHabiPage'
import AdminServiPage from '../pages/AdminServiPage'
import CreateServiPage from '../pages/CreateServiPage'
import AdminUserPage from '../pages/AdminUserPage'
import ImageHabiPage from '../pages/ImageHabiPage'

const RoutesFront = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/habitacion/:id' element={<ProductPage />} />
        <Route path='/servicio/:id' element={<ServicePage />} />
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
        <Route path='/adminHabi' element={
          <PrivateRoute role='admin'>
            <AdminHabiPage/>
          </PrivateRoute>
        }
        />
        <Route path='adminHabiCreate' element={
          <PrivateRoute role='admin'>
            <CreateHabiPage />
          </PrivateRoute>
        }/>
        <Route path='adminServi' element={
          <PrivateRoute role='admin'>
            <AdminServiPage />
          </PrivateRoute>
        }/>
        <Route path='adminServiCreate' element={
          <PrivateRoute role='admin'>
            <CreateServiPage/>
          </PrivateRoute>
        } />
        <Route path='adminUser' element={
          <PrivateRoute role='admin'>
            <AdminUserPage/>
          </PrivateRoute>
        }/>
        <Route path='imageHabiAdmin' element={
          <PrivateRoute role='admin'>
            <ImageHabiPage/>
          </PrivateRoute>
        }/>
          
        
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <FooterC />
    </>
  )
}

export default RoutesFront
