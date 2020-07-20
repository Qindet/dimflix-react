import React from "react";
import './header.css'
import logo from '../../img/logo.png'
import avatar from "../../img/avatar.jpg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex justify-content-center">
            <Link to="/"><img className="logo-main" src={logo} alt="logo"/></Link>
            <div className="d-flex" >
                <ul className="d-flex links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/tv">Tv Shows</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/mylist">My list</Link>
                    </li>
                </ul>
            <i className="material-icons search">search</i>
                <img className="avatar" src={avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Header