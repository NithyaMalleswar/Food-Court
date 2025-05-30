import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link to="/" className="logo-link">
          <img src="/food-logo.png" alt="Logo" className="logo-img-large" />
          <span className="logo-text-large">FOOD COURT</span>
        </Link>
        <div className="footer-socials">
  <a
    href="https://wa.me/919876543210"
    className="social-icon whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <span className="icon-inner"><img src={process.env.PUBLIC_URL + '/social-icons/whatsapp.jpg'} alt="WhatsApp" /></span>
  </a>
  <a
    href="https://facebook.com/foodcourt"
    className="social-icon facebook"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <span className="icon-inner"><img src={process.env.PUBLIC_URL + '/social-icons/facebook.jpg'} alt="Facebook" /></span>
  </a>
  <a
    href="https://instagram.com/foodcourt"
    className="social-icon instagram"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <span className="icon-inner"><img src={process.env.PUBLIC_URL + '/social-icons/instagram.jpg'} alt="Instagram" /></span>
  </a>
  <a
    href="https://threads.net/foodcourt"
    className="social-icon threads"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Threads"
  >
    <span className="icon-inner"><img src={process.env.PUBLIC_URL + '/social-icons/thread.jpg'} alt="Threads" /></span>
  </a>
  <a
    href="https://youtube.com/foodcourt"
    className="social-icon youtube"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <span className="icon-inner"><img src={process.env.PUBLIC_URL + '/social-icons/youtube.jpg'} alt="YouTube" /></span>
  </a>
</div>
      </div>
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/catering" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Catering</Link></li>
<li><Link to="/services/delivering" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Delivering</Link></li>
{/* <li><Link to="/services/delivery" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Delivery</Link></li> */}
<li><Link to="/services/dine-in" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Dine-In</Link></li>
<li><Link to="/services/takeaway" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Takeaway</Link></li>
<li><Link to="/services/customers-order" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Customer Orders</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/foodItems/chicken" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Chicken Items</Link></li>
            <li><Link to="/foodItems/salads" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Fresh Salads</Link></li>
            <li><Link to="/foodItems/Pizza" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Pizza</Link></li>
            <li><Link to="/foodItems/burgers" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Burgers</Link></li>
            <li><Link to="/foodItems/desserts" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Desserts</Link></li>
            <li><Link to="/foodItems/ice-cream" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ice Cream</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-reach">
          <h4>Reach Us</h4>
          <ul className="footer-contact-list">
            <li><span className="footer-contact-label">Phone:</span> <a href="tel:+919876543210">0343-0945789</a></li>
            <li><span className="footer-contact-label">Email:</span> <a href="mailto:info@foodcourt.com">info@foodcourt.com</a></li>
            <li><span className="footer-contact-label">Address:</span> 123 Food Lane, Gourmet City, 560001</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      &copy; {new Date().getFullYear()} FOOD COURT. All rights reserved.
    </div>
  </footer>
);

export default Footer;
