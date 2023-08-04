// Import necessary dependencies from React
import React from 'react';

// Import FontAwesomeIcon component from react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import star icons from Font Awesome
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

// Ratings component
const Ratings = ({ rating }) => {
    // Check if the rating is valid
    if (typeof rating !== 'number' || isNaN(rating) || rating < 0 || rating > 5) {
        // Return null if the rating is invalid
        return null;
    }

    // Calculate the number of full and empty stars
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    // Create an array of full stars using Array.from()
    const fullStarsArray = Array.from({ length: fullStars }, (_, index) => (
        <FontAwesomeIcon key={`full-star-${index}`} icon={fasStar} className="filled" />
    ));

    // Create an array of empty stars using Array.from()
    const emptyStarsArray = Array.from({ length: emptyStars }, (_, index) => (
        <FontAwesomeIcon key={`empty-star-${index}`} icon={farStar} />
    ));

    // Combine arrays of full and empty stars
    const stars = [...fullStarsArray, ...emptyStarsArray];

    // Render stars with appropriate CSS classes
    return <div className="ratings">{stars}</div>;
};

// Export the Ratings component for use in other parts of the application
export default Ratings;
