import '../css/DetalleCompra.css'
import Table from 'react-bootstrap/Table';

const DetalleCompra = () => {
    return (
        <>
            <div className="container detalle-compras">
                <div><h1 className='text-center'>Detalle de mis Reservas</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Habitacion</th>
                                <th>Ingreso</th>
                                <th>Salida</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>$$</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>$$</td>
                            </tr>
                            
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
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>$$$</td>
                              
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>$$</td>
                             
                            </tr>
                           
                        </tbody>
                    </Table>
                </div>
                <hr />
            </div>



        </>
    )
}

export default DetalleCompra
