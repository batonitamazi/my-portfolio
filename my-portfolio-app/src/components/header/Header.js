import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='navbar-list'>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
