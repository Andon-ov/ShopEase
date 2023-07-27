import './Footer.css'
function Footer() {
    return (

        <footer className="site-footer footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

                <div className="social-links">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>

                    </ul>
                </div>

                <div className="footer-nav">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about" target="_self">About Us</a></li>
                        <li><a href="/terms" target="_self">Terms & Conditions</a></li>
                        <li><a href="/privacy" target="_self">Privacy Policy</a></li>
                        <li><a href="/faqs" target="_self">FAQs</a></li>

                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    )
};
export default Footer;