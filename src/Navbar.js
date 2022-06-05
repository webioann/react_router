import React from 'react'
import './app.scss'

const Navbar = ({ children }) => {
    return (
        <nav className='navbar'>
            { children }
        </nav>
    )
}

export default Navbar;