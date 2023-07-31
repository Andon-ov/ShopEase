import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons';

const Ratings = ({rating}) => {
    const fullStars = Math.floor(rating); // Get the number of full stars
    const stars = [];

    // Render the full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={`full-star-${i}`} icon={fasStar} className="filled"/>);
    }

    // Render the remaining empty stars
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={farStar}/>);
    }

    return <div className="ratings">{stars}</div>;
};

export default Ratings;
