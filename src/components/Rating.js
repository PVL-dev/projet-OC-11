import React from 'react';
import { ReactComponent as Star } from '../assets/images/star.svg'

const Rating = (rate) => {
    let star1;
    // eslint-disable-next-line eqeqeq
    if (rate.rate == 0) {star1 = "grayStar"};

    let star2;
    if (rate.rate <= 1) {star2 = "grayStar"};

    let star3;
    if (rate.rate <= 2) {star3 = "grayStar"};

    let star4;
    if (rate.rate <= 3) {star4 = "grayStar"};

    let star5;
    if (rate.rate <= 4) {star5 = "grayStar"};

    return (
        <div className="rating-container">
            <Star className={star1}/>
            <Star className={star2}/>
            <Star className={star3}/>
            <Star className={star4}/>
            <Star className={star5}/>
        </div>
    );
};

export default Rating;

