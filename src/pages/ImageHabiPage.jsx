import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const ImageHabiPage = () => {
    const [allHabi, setAllHabi] = useState([])
    const [refreshState, resRefreshState] = useState(false)
    const [path, setPaht] = useState({})

    const getAllHabi = async () => {
        const res = await axios.get('http://localhost:3000/api/habitacion')
        setAllHabi(res.data)
    }

    const handleChange = (ev) => {
        setPaht(ev.target.files[0])
    }

    const handleClick = async (id) => {
       

        try {
            const formData = new FormData();
            formData.append('image', path);
            const res = await axios.post(`http://localhost:3000/api/image/${id}`, formData)
            
            
             return   Swal.fire(
                    'Imagen Cargada Correctamente',
                    '',
                    'success'
                )
              
            
        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Oooops..',
                text: 'Algo Salio Mal!!!'
            })


        }



    }

    useEffect(() => {
        getAllHabi()

        resRefreshState(false)

    }, [refreshState])
    return (
        <>
            <div className='container main'>
                <div>
                    <h1>Carga de Imagenes de Habitaciones</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Numero </th>
                                <th>Nombre</th>
                                <th>Descripciom</th>
                                <th>Cargar Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allHabi.map((habi) =>
                                    <tr key={habi._id}>
                                        <td>{habi.numero}</td>
                                        <td>{habi.nombre}</td>
                                        <td>{habi.descripcion}</td>
                                        <td><Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="file" onChange={handleChange} />
                                            </Form.Group>
                                            <Button variant="primary" onClick={() => { handleClick(habi._id) }} >
                                                Subir Archivo
                                            </Button>
                                        </Form></td>
                                    </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default ImageHabiPage
