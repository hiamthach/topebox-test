import React from 'react';

import './footer.scss';

import Logo from '../Logo/Logo';

import facebookIcon from '../../../content/assets/icons/facebook.png';
import instagramIcon from '../../../content/assets/icons/instagram.png';
import linkedinIcon from '../../../content/assets/icons/linkedin.png';
import tiktokIcon from '../../../content/assets/icons/Tiktok.png';
import twitterIcon from '../../../content/assets/icons/twitter.png';
import youtubeIcon from '../../../content/assets/icons/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookie Policy</li>
      </ul>
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__icons">
        <img src={facebookIcon} alt="facebook" />
        <img src={instagramIcon} alt="instagram" />
        <img src={linkedinIcon} alt="linkedin" />
        <img src={tiktokIcon} alt="tiktok" />
        <img src={twitterIcon} alt="twitter" />
        <img src={youtubeIcon} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
