// Import necessary dependencies from React
import React, { useState, useEffect, useCallback } from 'react';

// Import CSS styles for the component
import './Header.css';

// Import the logo image
import logo from './../../assets/logo.png';

// Header component
function Header() {
    // State to manage header activation
    const [isActive, setIsActive] = useState(false);

    // Callback function to handle scroll
    const handleScroll = useCallback(() => {
        // Determine if header should be active based on scroll position
        const shouldActivateHeader = window.scrollY > 0;
        setIsActive(shouldActivateHeader);
    }, []);

    // Effect to add scroll event listener with RAF
    useEffect(() => {
        // Callback with requestAnimationFrame for smoother performance
        const handleScrollWithRAF = () => {
            window.requestAnimationFrame(handleScroll);
        };

        // Add scroll event listener with RAF
        window.addEventListener('scroll', handleScrollWithRAF);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScrollWithRAF);
        };
    }, [handleScroll]);

    return (
        <section className={`header ${isActive ? 'active' : ''}`}>
            {/* Header logo */}
            <div className='header__logo'>
                <img src={logo} alt='logo' />
            </div>
        </section>
    );
}

export default Header;
