import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';
import wasteHeroLogo from '../images/wastehero-logo.png';

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="logo-container">
                        <img src={wasteHeroLogo} alt="WasteHero Logo" className="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/HelpPage">Help</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;