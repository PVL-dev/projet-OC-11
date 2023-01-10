import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg'


const Dropdown = ({title, content, size}) => {
    const dropdownClass = "dropdown__container dropdown--" + size;
    //const dropdownContentClass = "dropdown__content dropdown__content--" + size;
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={dropdownClass}>
            <button className="dropdown__header" onClick={toggle}>
                <h3>{title}</h3>
                <Arrow className={open ? "arrow arrow--opened" : "arrow"}/>
            </button>
            {open && (
                <div className="dropdown__content">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((elmt, index) => (
                                <li key={index}>{elmt}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

