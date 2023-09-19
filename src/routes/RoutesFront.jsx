import {Routes, Route} from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'

const RoutesFront = () => {
  return (
   <>
    <NavbarC />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
   </>
  )
}

export default RoutesFront
