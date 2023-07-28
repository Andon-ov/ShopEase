
import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './../../assets/logo.png';

function Header() {
  const [isActive, setIsActive] = useState(false);

  // Add a scroll event listener to check when the header becomes active
  useEffect(() => {
    const handleScroll = () => {
      const shouldActivateHeader = window.scrollY > 0;
      setIsActive(shouldActivateHeader);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`header ${isActive ? 'active' : ''}`}>
      <div className='header__logo'>
        <img src={logo} alt="logo" />
      </div>
    </section>
  );
}

export default Header;
