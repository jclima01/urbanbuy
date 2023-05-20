import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import logoClient from '../../Img/logoClient.png'
import SearchBar from "../../SearchBar/SearchBar";
import style from './NavEcommerce.module.css'






function NavEcommerce() {
  

  return (
    <Navbar className={style.navEcommerce}>
     
      <Container >
        <Navbar.Brand>
       
        <img src={logoClient} className={style.logoClient}/>
        </Navbar.Brand>
       
        <div>
          
        <SearchBar />
        </div>
        <img src={logoClient} style={{width:'3%'}}/>
      </Container>
    </Navbar>
  );
}

export default NavEcommerce;
