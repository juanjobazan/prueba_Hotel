
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const ServC = ({arraySer}) => {
  return (
  <>
{
  arraySer.map((servi)=> 
    <Card key={servi.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={servi.imagen} className='h-50' />
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
