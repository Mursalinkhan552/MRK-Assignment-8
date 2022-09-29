import React from 'react';
import './Header.css'
import logo from '../../images/gym3.jpg'

const Header = () => {
    return (
        <nav className='nav'>
            <div className="nav-logo">
            <img className="logo" src={logo} alt="" />
                <h1>MRK GYM</h1>
            </div>
        </nav>
    );
};

export default Header;