import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logoClient from "../../Img/logoClient.png";
import style from "./NavEcommerce.module.css";
import { useSelector } from "react-redux";

function NavEcommerce() {
  const theme = useSelector(state => state.theme)

  return (
    <Navbar className={`${style.navEcommerce} ${style[theme]}`}>
      <Container >
        <Navbar.Brand>
          <img src={logoClient} className={style.logoClient} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavEcommerce;
