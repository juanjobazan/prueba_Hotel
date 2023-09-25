import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductPage = () => {
  return (
    <>
      <div>
        <h1>Detalle de Habitacion (nombre)</h1>
        <hr />

        <Card className='d-flex'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Nombre Habitacion</Card.Title>
            <Card.Text>
              Imagen
            </Card.Text>
            <Card.Text>
              Detalle de Hanitacion
            </Card.Text>
            <Card.Text>
              Precio
            </Card.Text>

          </Card.Body>
        </Card>
        <hr />
        <From>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Seleccione las Fechas de Ingreso y de Salida</Form.Label>
            <Form.Label>Desde</Form.Label>
            <Form.Control type="date" name='date' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hasta</Form.Label>
            <Form.Control type="date" name='date' />
          </Form.Group>
          <Button variant="primary">Reservar</Button>
        </From></div>


    </>

  )
}

export default ProductPage
