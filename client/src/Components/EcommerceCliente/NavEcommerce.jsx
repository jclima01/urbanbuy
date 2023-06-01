import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import logoClient from "../../Img/logoClient.png";
import style from "./NavEcommerce.module.css";
import { useSelector } from "react-redux";
import CartWidget from "./CartWidget/CartWidget";
import { useNavigate } from "react-router";

function NavEcommerce() {
  const theme = useSelector(state => state.theme)
  // const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const cart = JSON.parse(localStorage.getItem("cart")) ? useSelector(state => state.cart) : []
  const navigate = useNavigate()


  const calculateTotalQuantity = () => {
    console.log(cart);
    const totalQuantity = cart.reduce(
      (count, product) => (count += product.quantity),
      0
    );
    return totalQuantity;
  };

  return (
    <Navbar className={`${style.navEcommerce} ${style[theme]}`}>
      <Container >
        <Navbar.Brand>
          <img src={logoClient} className={style.logoClient} />
        </Navbar.Brand>
      </Container>
      <Container >
        <CartWidget calculateTotalQuantity={calculateTotalQuantity} />
      </Container>

    </Navbar>
  );
}

export default NavEcommerce;
