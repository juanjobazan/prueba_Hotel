import '../css/User.css'
import Table from 'react-bootstrap/Table';

const AdminPage = () => {
  return (
    <>
      <div className="container main">
        <div>
          <h1>ABM Usuarios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Roll</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>


            </tbody>
          </Table>
        </div>
        <hr />
        <div>
          <h1>ABM Habitaciones</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
            
            </tbody>
          </Table>
        </div>
        <hr />
        <div>
          <h1>ABM Servicios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
            
            </tbody>
          </Table>
        </div>
        <hr />
      </div>
    </>
  )
}

export default AdminPage
