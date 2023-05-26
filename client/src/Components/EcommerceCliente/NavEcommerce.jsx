import React, { useState, useEffect }from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoClient from "../../Img/logoClient.png";
import SearchBar from "../../SearchBar/SearchBar";
import style from "./NavEcommerce.module.css";

function NavEcommerce({ theme }) {
  const [colorPalette, setColorPalette] = useState("urbanBuy");

  useEffect(() => {
    document.body.classList.remove("marino", "floral");
    document.body.classList.add(theme);
  }, [theme]);

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
