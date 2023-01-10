import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg'

const Carrousel = ({pictures}) => {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
      }

    return (
        <div className="carrousel__container">
            <Arrow className="leftArrow" onClick={prevPicture}/>
            <Arrow className="rightArrow" onClick={nextPicture}/>
            {pictures.map((picture, index) => {
                return (
                    <div className={index === current ? "carrousel__item active" : "carrousel__item"} key={index}>
                        {index === current && (
                            <img src={picture} alt=""/>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Carrousel;

