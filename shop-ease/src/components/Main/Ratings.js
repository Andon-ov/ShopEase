import React from 'react';

const Ratings = ({rating}) => {
    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-star-${i}`} className="fas fa-star"></i>);
        }

        if (halfStar) {
            stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
        }
        return stars;
    };

    return <div className="ratings">{renderStars()}</div>;
};

export default Ratings;
