import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { NavbarLinkData } from './NavbarLinkData'
import { NavbarSocialLinkData } from './NavbarSocialLinkData'

export default function Navbar() {
    return (
        <>
            <nav className='navbar-container'>
                <div className="img-container">
                    <img src="https://www.elgarajeproducciones.com/logos/logo_dsk.png" alt="" className="navbar-img" />
                </div>
                <div className="link-container">
                    <ul className="nav-menu-items">
                        {NavbarLinkData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="social-link-container">
                    <ul className="nav-menu-items social">
                        {NavbarSocialLinkData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path}>{item.icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

/*
<div className="img-container">
                    <img src="https://www.elgarajeproducciones.com/logos/logo_dsk.png" alt="" srcset="https://www.elgarajeproducciones.com/logos/logo_dsk.png" />
                </div>
*/