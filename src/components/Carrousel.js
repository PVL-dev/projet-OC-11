import React from 'react';

const Carrousel = ({pictures}) => {
    return (
        <div className="carrousel__container">
            <img className="carrousel__item" src={pictures[0]} alt="" />
        </div>
    );
};

export default Carrousel;

