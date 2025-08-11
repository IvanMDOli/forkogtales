import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo/logo.png'

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
        <header
            className={`fixed inset-x-0 top-0 flex justify-between items-end z-[100] transition-all duration-300 py-[10px] px-[50px] bg-zinc-900 ${
                isScrolled ? 'rounded-xl w-[98%] mx-auto shadow-lg border-b-2 border-b-amber-500' : 'mx-auto w-full border-b-4 border-b-amber-500'
            }`}
        >
            <div className={`content-[""] -z-1 inset-[0px] absolute bg-[url(/backgrounds/fondo-nav.png)] bg-cover bg-center pointer-events-none opacity-50 transition-all duration-300 ${ isScrolled ? 'rounded-xl' : 'rounded-none'}`}></div>
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
