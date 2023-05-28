import React from "react";
import styles from "./NavEcommerce.module.css";
import logo from "../../assets/urbenbuy.png";
import formaLogo from "../../assets/formalogo.png";
import { Link } from "react-router-dom";
function NavEcommerce() {
  return (
    <div className={styles.navEcommerce}>
      <div className={styles.containerLogo}>
        <Link to="/homeCliente">
          <img src={logo} alt="" className={styles.img}/>
        </Link>
      </div>
    </div>
  );
}

export default NavEcommerce;
