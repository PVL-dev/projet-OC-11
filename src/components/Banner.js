import React from 'react';

const Banner = ({ banner }) => {
    return (
        <div className="banner" id={banner.id}>
            <h2>{banner.h2content}</h2>
        </div>
    );
};

export default Banner;

