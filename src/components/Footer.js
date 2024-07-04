import React from 'react';
import SVGIcon1 from '../assets/SVGs/SVGIcon1';
import SVGIcon2 from '../assets/SVGs/SVGIcon2';
import SVGIcon3 from '../assets/SVGs/SVGIcon3';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>India Office</h3>
          <p>No. 17, Mayo Center,<br />2nd Floor, Commissariat Road,<br />Bangalore 560025.</p>
        </div>
        <div className="footer-column">
          <h3>USA</h3>
          <p>546, 5th Avenue,<br />New York,<br />NY 10036.</p>
        </div>
        <div className="footer-column">
          <h3>Studio</h3>
          <p>iRise<br />About Us<br />Why Studio<br />FAQ's<br />Privacy Policy</p>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <p>Startups<br />Corporates<br />Resources<br />Careers<br />Terms of Use</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2015 - 2024. All right reserved.</p>
        <div className="social-icons">
          <a href="#"><SVGIcon1 alt="LinkedIn" /></a>
          <a href="#"><SVGIcon2 alt="Twitter" /></a>
          <a href="#"><SVGIcon3 alt="Facebook" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;