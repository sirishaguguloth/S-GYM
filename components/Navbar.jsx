import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HiMenu, HiX } from "react-icons/hi";
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToLoginSection = () => {
    const loginSection = document.getElementById('logincontimg');
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after scrolling
    }
  };
  const scrollToContactSection = () => {
    const contactSection = document.getElementById('contquery');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); 
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='logo'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className={`${menuOpen ? 'show' : ''}`}>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          </Nav>
          <ul className='navlists'>
            <li className='listitems'><Link to={'/'} className='links'>Home</Link></li>
            <li className='listitems'><Link to={'/about'} className='links'>About Us</Link></li>
            <li className='listitems'><Link to={'/'}className="links" onClick={scrollToLoginSection}>Contact Us</Link></li>
            <li className='listitems'><Link to={'/package'} className='links'>Packages</Link></li>
            <li className='listitems'><button className="navaction"><Link to={'/'}  onClick={scrollToContactSection} className='links'>Call Now</Link></button></li>
            <li className='listitems'><button className="navaction"><Link to={'/login'} className='links'>Join Now</Link></button></li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
