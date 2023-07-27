import './Header.css';
import Nav from './Nav/Nav';


function Header() {
    return (<section className="header">
        <div className='logo'>
            <h1>Leather Market</h1>
            <p>Genius leather Shop</p>
        </div>

        <Nav />
    </section>);
}

export default Header;
