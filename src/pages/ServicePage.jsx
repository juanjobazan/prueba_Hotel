import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Serv.css'


const ServicePage = () => {
  return (
 <>
 <div className="container detalle-servicio ">
    <h1 className='text-center mt-5'>Detalle de Servicio (Nombre)</h1>
    <hr />
    <Card className='d-flex detalle-servicio'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <hr />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Descripcion
        </Card.Text>
        <Card.Text>
          Precio
        </Card.Text>
        <hr />
        <Button variant="primary" >Contratar Servicio</Button>
      </Card.Body>
    </Card>
    <hr />
 </div>
 </>
  )
}

export default ServicePage
