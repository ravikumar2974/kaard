import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    }, [location]);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    // Close menu function
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    // Cleanup on component unmount
    useEffect(() => {
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, []);

    // Close menu on escape key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMenuOpen]);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
                <h2>Kaard</h2>
            </Link>

            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`list ${isMenuOpen ? 'active' : ''}`}>
                <li className={`list-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className={`list-item ${location.pathname === '/templates' ? 'active' : ''}`}>
                    <Link to="/templates" onClick={closeMenu}>Templates</Link>
                </li>
                <li className={`list-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar