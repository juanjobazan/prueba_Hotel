import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

const ModalCU = (props) => {
    const { type, idUsu, getAllUsu} = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [idUsuState, setIUsuState] = useState('');
    const [usua, setUsua] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await axios.get(`http://localhost:3000/api/user/${idUsu}`)
        setUsua(res.data)
        setShow(true)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setUsua({ ...usua, [name]: value })

    }

    const sendFromHabi = async (id) => {
try {
    const res = await axios.put(`http://localhost:3000/api/user/${id}`,usua)

    if (res.status === 200) {
        Swal.fire(
            res.data.msg,
            '',
            'success'
        )
        getAllproducts()
        handleClose()
    }
} catch (error) {
    if(error.response.status === 400){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.msg
        })
      }
}
    }

   
    useEffect(() => {
        setIUsuState(idUsu)
    }, [])

  return (
 <>
  <Button variant="primary" onClick={handleClick}>
                {
                    type === 'nav'
                        ?
                        'Agregar Servicio'
                        :
                        'Modificar'
                }
            </Button>
            {
                idUsu
                    ?
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Usuario</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" name='user' placeholder="name@example.com" value={usua?.user} onChange={handleChange} disabled />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" name='role' placeholder="name@example.com" value={usua?.role} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => sendFromHabi(usua._id)} >
                                Guardar Cambios
                            </Button>

                        </Modal.Footer>
                    </Modal>
                    :
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Crear Habitacion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name='nombre' placeholder="name@example.com" value={usua?.nombre} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="text" name='precio' placeholder="name@example.com" value={usua?.precio} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control type="text" name='codigo' placeholder="name@example.com" value={usua?.descripcion} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button  >
                                Guardar Cambio
                            </Button>

                        </Modal.Footer>
                    </Modal>
            }
 </>
  )
}

export default ModalCU
