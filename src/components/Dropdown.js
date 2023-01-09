import React from 'react';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg'

const Dropdown = ({title, content, size}) => {
    const dropdownClass = "dropdown " + size

    return (
        <div className={dropdownClass}>
            <h3>{title}</h3>
            <Arrow className="arrow"/>
        </div>
    );
};

export default Dropdown;

