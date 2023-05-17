import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../../Img/logo.png';
import './AppNavbar.css'

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
          <img src={logo} className="logo"/>
          <button style={{marginLeft:'150px', backgroundColor:'rgb(235, 152, 78)'}}>Comienza tu prueba hoy</button>
        </Navbar.Brand>
        <div >
       <button>Sing in</button>
       <button >Login</button>
       </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
