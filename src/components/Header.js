import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/images/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <Logo />
            </NavLink>
            
            <div className="header__navLink">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>À propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header

