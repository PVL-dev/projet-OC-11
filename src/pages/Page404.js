import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="mainContainer">
            <Header />
            <div className="page404">
                <h1>404</h1>
                <h3>Oups ! La page que vous demandez n'existe pas.</h3>
                <NavLink to="/">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Page404;

