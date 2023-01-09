import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ accomodation }) => {
    const accomodationPath = ('/logement/' + accomodation.id);

    return (
        <NavLink to={accomodationPath}>
            <li className="card" id={accomodation.id}>
                <img className="card__image" src={accomodation.cover} alt="" />

                <div className="card__infos">
                    <h3>{accomodation.title}</h3>
                </div>            
            </li>
        </NavLink>
    );
};

export default Card;

