import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import NavEcommerce from "../NavEcommerce";
import styles from "./ShoppingCartContainer.module.css";
function ShoppingCartContainer() {
  return (
    <div className={styles.container}>
      <NavEcommerce />
      <ShoppingCart />
    </div>
  );
}

export default ShoppingCartContainer;
