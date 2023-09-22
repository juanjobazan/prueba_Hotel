import React from 'react'
import '../css/Footer.css'
import { NavLink } from 'react-router-dom'

const FooterC = () => {
  return (
    
<>
    <footer className="footer">
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <NavLink to="/*"></NavLink>
                    <img src='https://nossahotel.com/wp-content/uploads/2022/12/NOSSA-logo-wh-29.png' width="100" height="60"></img>
                    <h5 className="text-dark">Wsp: 3815396425</h5>
                    <h5 className="text-dark">SgH@gmail.com</h5>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="text-dark">Redes</h5>
                    <NavLink to="/*" className="nav-link text-dark">Facebook</NavLink>
                    <NavLink to="/*" className="nav-link text-dark mx-3">Instagram</NavLink>
                    <NavLink to="/*" className="nav-link text-dark">TiKTok</NavLink>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">

                    <h5 className="text-dark">Recepcion 24hs</h5>
                    <h5 className="text-dark">Hotel Seguro</h5>
                    <h5 className="text-dark">Smt Virgen de la Merced 737</h5>
                    
                </div>
            </div >
        </div >
    </footer >
    </>
  )
}

export default FooterC
