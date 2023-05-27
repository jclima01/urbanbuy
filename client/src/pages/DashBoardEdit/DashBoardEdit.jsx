import UploadWidget from "../../Components/UploadWidget/UploadWidget";
import React, { useState } from "react";
import styles from "./DashBoardEdit.module.css";
import NavEcommerce from "../../Components/EcommerceCliente/NavEcommerce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/actions";

const DashBoardEdit = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));

  };

 return (
    <div>
      <h1 className={styles.title}>Paleta de colores</h1>
      <div className={styles.containerButtons}>
      <button
          className={`${styles["urbanBuy"]} ${theme === "urbanBuy" ? styles.active : ""}`}
          onClick={() => handleThemeChange("urbanBuy")}
        >
          UrbanBuy
        </button>
        <button
          className={`${styles["navy-blue-button"]} ${theme === "marino" ? styles.active : ""}`}
          onClick={() => handleThemeChange("marino")}
        >
          Marino
        </button>
        <button
         className={`${styles["floral-button"]} ${theme === "floral" ? styles.active : ""}`}
         onClick={() => handleThemeChange("floral")}
        >
          Floral
        </button>
        <NavEcommerce theme={theme} />
      </div>
      {/* <UploadWidget /> */}
    </div>
  );
};

export default DashBoardEdit;

