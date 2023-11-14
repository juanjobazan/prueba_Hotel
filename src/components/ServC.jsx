
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const ServC = ({arraySer}) => {
  return (
  <>
{
  arraySer.map((servi)=> 
    <Card key={servi.id} style={{ width: '18rem' }} className='my-3 mx-3 mt-2 mb-3 m-3'>
  <Card.Img variant="top" src={servi.imagen} className='h-50 my-2 mx-2 py-2 px-2 mt-2' />
  <Card.Body>
    <Card.Title>{servi.nombre} - {servi.codigo}</Card.Title>
    <Card.Text>
      {servi.descripcion}
      ${servi.precio}
    </Card.Text>
    <Link to={`/servicio/${servi._id}`} variant="primary">Ver Mas</Link >
  </Card.Body>
</Card>)
 
}
  </>
  )
}

export default ServC
