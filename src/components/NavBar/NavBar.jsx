import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './navbar.scss'


export const NavBar = () => {

    const perfil = localStorage.getItem("token")

    return (
        <header className='header'>
            <div className='logo'>
                <Link to={'/home'}><img src={logo} alt="Logo" /></Link>
            </div>
            <nav className='nav-bar'>
                <ul className='botones-nav'>
                    <li>
                        <Link className='links-nav' to={"/home"}>Inicio</Link>
                    </li>
                    <li>
                        <Link className='links-nav' to={"/noticias"}>Noticias</Link>
                    </li>
                    <li>
                        <Link className='links-nav' to={"/historia"}>Mundo</Link>
                    </li>
                    <li>
                        <Link className='links-nav' to={"/mapa"}>Mapa</Link>
                    </li>
                </ul>
                <ul className='perfil-menu'>
                    <li>
                        <Link className='links-nav' to={perfil ? "/perfil" : "*"}><img src={perfil ? perfil.picture : "./foto-perfil-generico.png"} alt="Foto de Perfil" />{perfil ? perfil.name : "Perfil"}</Link>
                        <ul className='dropdown-nav'>
                            <li>
                                <Link className='links-nav' to={"/login"}>Login</Link>
                            </li>
                            <li>
                                <Link className='links-nav' to={"/register"}>Registrarse</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}