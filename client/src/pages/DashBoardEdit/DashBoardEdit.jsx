import UploadWidget from "../../Components/UploadWidget/UploadWidget";
import React, { useState } from "react";
import styles from "./DashBoardEdit.module.css";
import NavEcommerce from "../../Components/EcommerceCliente/NavEcommerce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme, setSliderTheme, setSearchBarTheme } from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar"; 


const DashBoardEdit = () => {
  const theme = useSelector((state) => state.theme);
  const sliderTheme = useSelector((state) => state.sliderTheme)
  const searchBarTheme = useSelector((state) => state.searchBarTheme)
  const dispatch = useDispatch();
  
  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));    

  };
  const handleSliderThemeChange = (selectedSliderTheme) => {
    dispatch(setSliderTheme(selectedSliderTheme));
  };

  const handleSearchBarThemeChange = (selectedSearchBarTheme) => {
    dispatch(setSearchBarTheme(selectedSearchBarTheme));
  };

 return (
    <div>
      <h1 className={styles.title}>Barra de navegacion</h1>
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
        <h1 className={styles.title}>Color Slider</h1>
        <button
          className={`${styles["urbanBuy"]} ${sliderTheme === "urbanBuy" ? styles.active : ""}`}
          onClick={() => handleSliderThemeChange("urbanBuy")}
        >
          UrbanBuy
        </button>
        <button
          className={`${styles["navy-blue-button"]} ${sliderTheme === "marino" ? styles.active : ""}`}
          onClick={() => handleSliderThemeChange("marino")}
        >
          Marino
        </button>
        <button
          className={`${styles["floral-button"]} ${sliderTheme === "floral" ? styles.active : ""}`}
          onClick={() => handleSliderThemeChange("floral")}
        >
          floral
        </button>
        <h1 className={styles.title}>Estilo de barras de busqueda</h1>
        <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleOne" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleOne")}>Estilo 1</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleTwo" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleTwo")}>Estilo 2</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleThree" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleThree")}>Estilo 3</button>
          <SearchBar searchBarTheme={searchBarTheme}/>
      </div>
      {/* <UploadWidget /> */}
    </div>
  );
};

export default DashBoardEdit;

