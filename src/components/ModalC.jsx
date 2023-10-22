import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

const ModalC = (props) => {
  
    const { type, idHabi, getAllHabi} = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [idHabiState, setIHabiState] = useState('');
    const [habi, setHabi] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await axios.get(`http://localhost:3000/api/habitacion/${idHabi}`)
        setHabi(res.data)
        setShow(true)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setHabi({ ...habi, [name]: value })

    }

    const sendFromHabi = async (id) => {
try {
    const res = await axios.put(`http://localhost:3000/api/habitacion/${id}`,habi)

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

    const createHabi = async () => {
        const res = await axios.post('http://localhost:3000/api/habitacion',habi)
        
        if(res.status===201){
            Swal.fire(
                'Producto Creado!',
                res.data.msg,
                'success'
            )
            navigate('/admin')
        }
    }

    useEffect(() => {
        setIHabiState(idHabi)
    }, [])
    return (
        <>
            <Button variant="primary" onClick={handleClick}>
                {
                    type === 'nav'
                        ?
                        'Agregar Habitacion'
                        :
                        'Modificar'
                }
            </Button>
            {
                idHabi
                    ?
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Habitacion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name='nombre' placeholder="name@example.com" value={habi?.nombre} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" name='precio' placeholder="name@example.com" value={habi?.precio} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" name='descripcion' placeholder="name@example.com" value={habi?.descripcion} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Capacidad</Form.Label>
                                    <Form.Control type="number" name='capacidad' placeholder="name@example.com" value={habi?.capacidad} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Destacado</Form.Label>
                                    <Form.Control type="text" name='destacado' placeholder="name@example.com" value={habi?.destacado} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => sendFromHabi(habi._id)} >
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
                                    <Form.Control type="text" name='nombre' placeholder="name@example.com" value={habi?.nombre} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="text" name='precio' placeholder="name@example.com" value={habi?.precio} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control type="text" name='codigo' placeholder="name@example.com" value={habi?.descripcion} onChange={handleChange} />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={createHabi} >
                                Guardar Cambio
                            </Button>

                        </Modal.Footer>
                    </Modal>
            }

        </>
  )
}

export default ModalC
