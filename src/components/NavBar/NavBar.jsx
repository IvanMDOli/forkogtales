import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'


export const NavBar = () => {

    //const perfil = localStorage.getItem("token")

     const navLinks = [
        { path: "/home", label: "Inicio" },
        { path: "/noticias", label: "Noticias" },
        { path: "/historia", label: "Mundo" },
        { path: "/mapa", label: "Mapa" }
    ]

    const perfilLinks = [
        { path: "/login", label: "Login" },
        { path: "/register", label: "Registrarse" }
    ]

    const linkClass = 'text-[16px] select-none duration-300 ease-out hover:text-amber-400'

    return (
        <header className='fixed w-full z-100 inset-x-0 top-0 left-0 flex justify-between items-end py-[10px] px-[50px] border-b-4 border-b-amber-500 bg-zinc-900'>
            <div className='content-[""] -z-1 inset-[0px] absolute bg-[url(/backgrounds/fondo-nav.png)] bg-cover bg-center pointer-events-none opacity-50'></div>
            <div className='py-4'>
                <Link to={'/home'}><img className='w-[200px]' src={logo} alt="Logo" /></Link>
            </div>
            <nav className='w-[65%] flex items-end justify-between'>
                <ul className='w-[60%] flex items-center justify-between m-[10px]'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link className={`${linkClass} pb-[20px]`} to={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='relative m-[10px] hover:[&_ul]:opacity-100 hover:[&_ul]:-translate-x-[50%] hover:[&_ul]:translate-y-[5px] hover:[&_ul]:pointer-events-auto'>
                    <li>
                        {/*<Link className='links-nav' to={//perfil ? "/perfil" : "*"}><img src={perfil ? perfil.picture : "./foto-perfil-generico.png"} alt="Foto de Perfil" />{perfil ? perfil.name : "Perfil"}</Link>*/}
                        <Link className={`${linkClass} pb-[20px]`} to='*'>Perfil</Link>
                        <ul className='absolute flex p-[1em] mt-[5px] flex-col items-center top-[100%] left-[50%] duration-300 ease-out opacity-0 pointer-events-none -translate-x-[50%] -translate-y-[10px] bg-zinc-800 text-white rounded shadow-lg'>
                            {perfilLinks.map((link, index) => (
                                <li key={index}>
                                    <Link className={linkClass} to={link.path}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}