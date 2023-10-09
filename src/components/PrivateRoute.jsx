

const PrivateRoute = ({ children, role }) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const roleLs = JSON.parse(localStorage.getItem('role'))

    if (token) {
        if (role === roleLs) {
            return children
        }else{
            if(roleLs==='admin'){
                location.href='/admin'
            }else{
                location.href='/user'
            }
        }
      
    }else{
        location.href='/'
    }
}

export default PrivateRoute
