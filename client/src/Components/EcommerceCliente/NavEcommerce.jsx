import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'





function NavEcommerce() {
  

  return (
    <Navbar>
     
      <Container>
        <Navbar.Brand>
          <img src={logoClient} className="logo-nav"/>
         <SearchBar/>
        </Navbar.Brand>
        <div >
        <Link to='Signin'>
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

export default NavEcommerce;
