import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardsC = ({ arrayHabi }) => {

  return (
    <>{
      arrayHabi.map((habi) =>
        <Card style={{ width: '18rem' }} key={habi.id}>
          <Card.Img variant="top" src={habi.imagen} className='h-50' />
          <Card.Body>
            <Card.Title>{habi.nombre}</Card.Title>
            <Card.Text>
              $ {habi.precio}
            </Card.Text>
            <Card.Text>
              {habi.descripcion}
            </Card.Text>
            <Link to={`/habitacion/${habi._id}`} className='btn btn-outline-warning'>Ver Mas </Link>
          </Card.Body>
        </Card>)

    }


    </>





  )
}

export default CardsC
