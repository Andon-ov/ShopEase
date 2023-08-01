import React, {useState, useEffect, useCallback} from 'react';
import './Header.css';
import logo from './../../assets/logo.png';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = useCallback(() => {
        const shouldActivateHeader = window.scrollY > 0;
        setIsActive(shouldActivateHeader);
    }, []);

    useEffect(() => {
        const handleScrollWithRAF = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', handleScrollWithRAF);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScrollWithRAF);
        };
    }, [handleScroll]);

    return (<section className={`header ${isActive ? 'active' : ''}`}>
            <div className='header__logo'>
                <img src={logo} alt='logo'/>
            </div>
        </section>);
}

export default Header;
