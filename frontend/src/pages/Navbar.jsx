import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className='navbar'>
            <Link to="/" className="navbar-logo"><h2>Kaard</h2></Link>
            <ul className='list'>
                <li className={`list-item ${location.pathname === '/' ? 'active' : ''}`}><Link to="/">Home</Link></li>
                <li className={`list-item ${location.pathname === '/templates' ? 'active' : ''}`}><Link to="/templates">Templates</Link></li>
                <li className={`list-item ${location.pathname === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar