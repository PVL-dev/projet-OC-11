import React from 'react';
import Card from './Card';
import logements from '../assets/json/logements.json';

const Gallery = () => {
    return (
        <ul className="gallery">
            {logements.map((accomodation) => (
                <Card key={accomodation.id} accomodation={accomodation} />
            ))}
        </ul>
    );
};

export default Gallery;

