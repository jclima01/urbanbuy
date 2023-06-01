import UploadWidget from "../../Components/UploadWidget/UploadWidget";
import React, { useState } from "react";
import styles from "./DashBoardEdit.module.css";
import NavEcommerce from "../../Components/EcommerceCliente/NavEcommerce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme, setSliderTheme, setSearchBarTheme, setCardStyle } from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar"; 


const DashBoardEdit = () => {
  const theme = useSelector((state) => state.theme);
  const sliderTheme = useSelector((state) => state.sliderTheme)
  const searchBarTheme = useSelector((state) => state.searchBarTheme)
  const cardStyle = useSelector((state) => state.cardStyle);
  
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

  const handleCardChange = (selectedCardStyle) =>{
     dispatch(setCardStyle(selectedCardStyle));
  }

  

 return (
    <div>
      <h1 className={styles.title}>Tema Principal</h1>
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
          onClick={() => handleSearchBarThemeChange("styleOne")}>Minimalista</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleTwo" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleTwo")}>Moderno</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleThree" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleThree")}>Retro</button>
          <SearchBar searchBarTheme={searchBarTheme}/>
          <h1>Visualizacion del producto</h1>
          <button className={`${styles["cardButtonClassic"]} ${cardStyle === "clasico" ? styles.active : ""}`}
          onClick={() => handleCardChange("clasico")}>Clasica</button>
          <button className={`${styles["babyButton"]} ${cardStyle === "baby" ? styles.active : ""}`}
          onClick={() => handleCardChange("baby")}>Baby</button>
      </div>
      {/* <UploadWidget /> */}
    </div>
  );
};

export default DashBoardEdit;

