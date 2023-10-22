import { useEffect, useState } from 'react';
import '../css/DetalleCompra.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DetalleCompra = () => {

    const [allServi, setAllServi] = useState([])
    const [refreshState, resRefreshState] = useState(false)
    const [allRese, setAllRes] = useState([])

  

    const getAllServi = async () => {
        const idUser = JSON.parse(localStorage.getItem('id'))
        const resUser = await axios.get(`http://localhost:3000/api/user/${idUser}`)
        const resCartServi = await axios.get(`http://localhost:3000/api/cartServicio/${resUser.data.idCartServicio}`)
        setAllServi(resCartServi.data.cartServicio.servicios)
       
    }

    const getAllRes =async()=>{
        const idUser = JSON.parse(localStorage.getItem('id'))
        const resUser = await axios.get(`http://localhost:3000/api/user/${idUser}`)
        const resReserva = await axios.get(`http://localhost:3000/api/reserva/${resUser.data.idReserva}`)
        setAllRes(resReserva.data.reserva.habitaciones)
    }
    useEffect(() => {
        getAllServi()
        getAllRes()

        resRefreshState(false)

    }, [refreshState])
    return (
        <>
            <div className="container detalle-compras">
                <div><h1 className='text-center'>Detalle de mis Reservas</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>Descripion</th>
                                <th>capacidad</th>
                                <th>Ingreso-Salida</th>
                                <th>Precio</th>
                                <th>Pagar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          allRese.map((reser)=>
                          <tr key={reser._id}>
                          <td>{reser.numero}</td>
                          <td>{reser.descripcion}</td>
                          <td>{reser.capacidad}</td>
                          <td>{reser.reservas}</td>
                          <td>$AR-{reser.precio}</td>
                          <Button variant='warning' >Pagar</Button>
                      </tr>
                          )      
                            }
                          
                        
                        </tbody>
                    </Table>
                </div>
                <hr />
                <div>
                    <h1 className='text-center'>Detalle de mis Servicios</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Servivio</th>
                                <th>Precio</th>
                                <th>Pagar</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allServi.map((servi) =>
                                    <tr key={servi._id}>
                                        <td>{servi.codigo}</td>
                                        <td>{servi.descripcion}</td>
                                        <td>$AR-{servi.precio}</td>
                                        <Button variant='warning' >Pagar</Button>



                                    </tr>

                                )

                            }


                        </tbody>
                    </Table>
                </div>
                <hr />
            </div>



        </>
    )
}

export default DetalleCompra
