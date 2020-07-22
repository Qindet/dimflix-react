import React from "react";
import './footer.css'
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <div className="footer-main">
               <div className="logo-bottom"><img src={logo} alt="logo" /></div>
        </div>
    )
}

export default Footer