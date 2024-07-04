import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scroll ? 'solid' : ''}>
      <div className="logo">LIVEINTECH</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features1">Why Studio</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#catalyst">Catalysts</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#iRise">iRise</a></li>
          <li><a href="#contact" className="button">Pitch</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;