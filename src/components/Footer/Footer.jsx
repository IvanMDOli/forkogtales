import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'


export const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='footer-nav'>
            <ul>
                <Link className='links-footer' to={'/orders'}>Orders</Link>
                <Link className='links-footer' to={'/about-me'}>About Me</Link>
            </ul>
        </nav>
    </footer>
  )
}
