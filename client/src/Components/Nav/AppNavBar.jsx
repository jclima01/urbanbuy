import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../../Img/logo.png';
import logo2 from '../../Img/logo2.png';
import './AppNavbar.css'
import {Link} from 'react-router-dom'

function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      className={scrolled ? "scrolled" : ""}
      expand="lg"
      sticky="top"
      variant="light"
      bg={scrolled ? "light" : "transparent"}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <Container>
        <Navbar.Brand>
          <img src={ scrolled ? logo : logo2} className="logo-nav"/>
          {/* <Link to='/homecliente'>
          <button className="button-nav">Comienza tu prueba hoy</button>
          </Link> */}
        </Navbar.Brand>
        <div >
        <Link to='singin'>
       <button className="SignIn">Sign in</button>
        </Link>
     <Link to='login'>
       <button className="SignIn">Login</button>
       </Link>
       </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
