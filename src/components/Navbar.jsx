import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">
                    <img src="src/assets/Ableton Icon.svg" alt="Ableton Logo" />
                </a>
                <ul className="nav-links">
                    <li><a href="#">Live</a></li>
                    <li><a href="#">Push</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Packs</a></li>
                    <li><a href="#">Help</a></li>
                    <li>
                        <a href="#">More +</a>
                        <ul className="dropdown">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Learning Music</a></li>
                            <li><a href="#">Learning Synths</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <a href="#" className="try-btn">Try Live 12 for free</a>
                    <a href="#" className="account-btn">Log in or register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;