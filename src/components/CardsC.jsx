import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardsC = ({ arrayHabi }) => {
let altc
  return (
    <>{
      arrayHabi.map((habi) =>
              
        <Card style={{ width: '18rem' }} key={habi.id} className='my-3 mx-3 mt-2 mb-3 m-3'>
          {altc= 'Hotel Nossa Tafi del Valle - Habitacion Numero:' + ' ' + habi.numero  }
          <Card.Img variant="top" src={habi.imagen} className='h-50 my-2 mx-2 py-2 px-2 mt-2' alt={altc} />
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
