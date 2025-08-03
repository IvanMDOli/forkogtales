import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './navbar.scss'


export const NavBar = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <Link to={'/home'}><img src={logo} alt="Logo" /></Link>
            </div>
            <nav className='nav-bar'>
                <ul className='botones-nav'>
                    <Link className='links-nav' to={"/noticias"}>Noticias</Link>
                    <Link className='links-nav' to={"/historia"}>Mundo</Link>
                    <Link className='links-nav' to={"/mapa"}>Mapa</Link>
                </ul>
            </nav>
        </header>
    )
}