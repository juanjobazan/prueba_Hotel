import '../css/ErrorPage.css'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <>
      <div className="full-screen-size-fixed-container d-flex justify-content-center align-items-center">
    <div className="p-3 text-center shadow">
        <h1 className="display-1 font-weight-bold ">404</h1>
        <h4 className="text-muted">Page Not Found</h4>
        <p className="">Esta pagina momentaneamente No esta Disponible...</p>
        <Link to='/' className="btn btn-dark fas fa-house-user mr-2">Volver a Inicio</Link >
    </div>
</div>

    </>
  )
}

export default ErrorPage
