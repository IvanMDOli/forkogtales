import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '/logo/logo.png'
import logoChico from '/icon/favicon-forkog.png'

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
        { path: "/nosotros", label: "Nosotros" },
        { path: "/noticias", label: "Noticias" },
        { path: "/mundo", label: "Mundo" },
        { path: "/mapa", label: "Mapa" }
    ]

    const perfilLinks = [
        { path: "/login", label: "Login" },
        { path: "/register", label: "Registrarse" }
    ]

    const linkClass = 'text-[16px] select-none duration-300 ease-out hover:text-amber-400'
    const baseHeaderClass = "fixed inset-x-0 top-0 flex justify-between items-end z-[100] transition-all duration-300 px-5 py-1 bg-zinc-900 mx-auto"
    const scrolledClass = "rounded-xl w-[98%] shadow-lg border-b-2 border-b-amber-500 mt-[1%] h-[8%] opacity-95"
    const topClass = "w-full h-[16%] border-b-4 border-b-amber-500 mt-0"

    return (
        <header className={`${baseHeaderClass} ${isScrolled ? scrolledClass : topClass}`}>
            <div className={`-z-1 inset-[0px] absolute bg-[url(/backgrounds/fondo-nav.png)] bg-cover bg-center pointer-events-none opacity-50 transition-all duration-300 ${ isScrolled ? 'rounded-xl' : 'rounded-none'}`}></div>
            <div className='flex item-center justify-center *:flex *:item-center *:justify-center h-full w-1/4 transition-all duration-300'>
                <Link to={'/home'}><img className={`transition-all duration-700 ${isScrolled ? 'py-2' : 'py-4'}`} src={isScrolled ? logoChico : logo} alt="Logo"/> </Link>
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
                <ul className='relative m-[10px] mr-[50px] hover:[&_ul]:opacity-100 hover:[&_ul]:-translate-x-[50%] hover:[&_ul]:translate-y-[5px] hover:[&_ul]:pointer-events-auto'>
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
