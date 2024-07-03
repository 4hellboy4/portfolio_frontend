import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router
import photo from '../assets/hellboy.png'
import '../fonts/css/styles.css'


const Header: React.FC = () => {
  return (
    <header>
      <img src={photo} className="logo" alt="logo" />
      <nav>
        <ul className="nav__links">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/comic">Comic</Link></li>
        </ul>
      </nav>
      <Link to="/" className="cta">Home</Link>
    </header>
  );
};

export default Header;
