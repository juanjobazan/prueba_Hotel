import { Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import '../css/HomePage.css'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
   <>
   <div className="container main">
    <Row>
      <div >
        <h1 className='text-center'>SgH Hotel Nossa</h1>
        <hr />
        <h2 className='text-center'> Protagonista de Desarrollo, Diseño, Analisis, Modelado de BD</h2>
        <h3 className='text-center'>Bazan Juan | Scrum Master | Tech Leader</h3>
       
        <hr />
      <Col xs={6} md={4} >
          <Image src="https://res.cloudinary.com/ddxah5v71/image/upload/v1697856028/peyvtotbgjesgmzuxyyr.jpg" fluid/>
          </Col>
    
      </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sobre MI</Accordion.Header>
        <Accordion.Body>
          Cuento con bastantes habilidades en el Analisisde sistemas, Diseño de Sistemas, Arquitectutra y Modelado de Datos, adquiridas 
          en el proceso de aprendisaje en estos ultimos años. Actualmente me encuentro trabajo para la firma Cencosud en la cual mis servicios no son 
          del mundo TI. En el cual me gustaria formar parte de este magnifico y desafiante mundo. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Contactame</Accordion.Header>
        <Accordion.Body>
        Puedes ver un poco de mis Proyectos:
        <hr />
       <Link to='https://primera-final.vercel.app/' target="_blank"> Mr Burger</Link> |   <Link to='https://proyectojs-tau.vercel.app/index.html' target="_blank"> JsAutomotores </Link>
       <hr />
     Redes:
       <hr />
       <Link to='https://www.linkedin.com/in/juan-bazan-171a7585/' target='_blank'>linkedin</Link> | <Link to='https://github.com/juanjobazan/prueba_Hotel.git' target='_blank'>github</Link>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Row>
   </div>
  
    </>
  )
}

export default AboutPage
