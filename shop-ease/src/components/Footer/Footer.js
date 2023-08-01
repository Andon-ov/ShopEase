import './Footer.css';

const socialMediaLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
    },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__content">
                    <div className="contact__info">
                        <h4>Contact Us</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>

                    <div className="social__links">
                        <h4>Follow Us</h4>
                        <ul>
                            {socialMediaLinks.map((socialMedia) => (
                                <li key={socialMedia.name}>
                                    <a
                                        href={socialMedia.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        alt={`Follow us on ${socialMedia.name}`}
                                    >
                                        {socialMedia.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__nav">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <a href="/leather-bags" target="_self">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/leather-bags" target="_self">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/leather-bags" target="_self">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/leather-bags" target="_self">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
