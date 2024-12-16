import React from 'react';
import Instagram from "../Assets/Instagram.png";
import Facebook from "../Assets/Facebook.png";
import Tiktok from "../Assets/Tiktok.png";
import Twitter from "../Assets/Twitter.png";  



const Footer = () => {
  return (
    <footer>
        <div className="redes">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src={Tiktok} alt="TikTok" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={Twitter} alt="Twitter" />
      </a>
    </div>
      <p>© 2024 PonteTech. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
