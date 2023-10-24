import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../../utils/axiosCliente';

const ModalC = (props) => {
  
    const { type, idServi, getAllServi} = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [idServiState, setIServibiState] = useState('');
    const [servi, setServi] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await clienteAxios.get(`/servicio/${idServi}`,config)
        setServi(res.data)
        setShow(true)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setServi({ ...servi, [name]: value })

    }

    const sendFromHabi = async (id) => {
try {
    const res = await clienteAxios.put(`/servicio/${id}`,servi,config)

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
        setIServibiState(idServi)
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
                idServi
                    ?
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Servicio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control type="number" name='codigo' placeholder="name@example.com" value={servi?.codigo} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" name='descripcion' placeholder="name@example.com" value={servi?.descripcion} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name='nombre' placeholder="name@example.com" value={servi?.nombre} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" name='precio' placeholder="name@example.com" value={servi?.precio} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => sendFromHabi(servi._id)} >
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
                                    <Form.Control type="text" name='nombre' placeholder="name@example.com" value={servi?.nombre} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="text" name='precio' placeholder="name@example.com" value={servi?.precio} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control type="text" name='codigo' placeholder="name@example.com" value={servi?.descripcion} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={createservi} >
                                Guardar Cambio
                            </Button>

                        </Modal.Footer>
                    </Modal>
            }

        </>
  )
}

export default ModalC
