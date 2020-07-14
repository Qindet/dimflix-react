import React from "react";
import './header.css'
import logo from '../../img/logo.png'
import avatar from "../../img/avatar.jpg"

const Header = () => {
    return (
        <div className="header d-flex justify-content-center">
            <a href="#"><img src={logo} alt="logo"/></a>
            <div className="d-flex" >
                <ul className="d-flex links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Tv Shows</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">My list</a>
                    </li>
                </ul>
            <i className="material-icons search">search</i>
                <img className="avatar" src={avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Header