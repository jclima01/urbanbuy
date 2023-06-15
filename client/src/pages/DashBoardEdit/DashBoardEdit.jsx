import UploadWidget from "../../Components/UploadWidget/UploadWidget";
import React, { useState } from "react";
import styles from "./DashBoardEdit.module.css";
import NavEcommerce from "../../Components/EcommerceCliente/NavEcommerce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setTheme,
  setSliderTheme,
  setSearchBarTheme,
  setCardStyle,
  setBannerText,
} from "../../redux/actions";
import Banner from "../../Components/EcommerceCliente/Banner";
import axios from "axios";

const DashBoardEdit = () => {
  const theme = useSelector((state) => state.theme);
  const cardStyle = useSelector((state) => state.cardStyle);
  const [banner, setBanner] = useState("");
  const clientAdmin = useSelector((state) => state.clientAdmin);

  const dispatch = useDispatch();

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme, clientAdmin._id));
  };
  // const handleSliderThemeChange = (selectedSliderTheme) => {
  //   dispatch(setSliderTheme(selectedSliderTheme));
  // };

  // const handleSearchBarThemeChange = (selectedSearchBarTheme) => {
  //   dispatch(setSearchBarTheme(selectedSearchBarTheme));
  // };

  const handleCardChange = (selectedCardStyle) => {
    dispatch(setCardStyle(selectedCardStyle));
  };

  // const handleBanner =(selectedBanner) => {
  //   dispatch(setBanner(selectedBanner))
  // }

  const handlerIntputBanner = (e) => {
    setBanner(e.target.value);
  };
  console.log(banner);

  const handlerSubmitBanner = (e) => {
    e.preventDefault();
    console.log(banner), console.log(clientAdmin._id);
    dispatch(setBannerText(banner, clientAdmin._id));
  };

  return (
    <div>
      <h1 className={styles.title}>Tema Principal</h1>
      <div className={styles.containerButtons}>
        <button
          className={`${styles["urbanBuy"]} ${
            theme === "urbanBuy" ? styles.active : ""
          }`}
          onClick={() => handleThemeChange("urbanBuy")}
        >
          UrbanBuy
        </button>
        <button
          className={`${styles["navy-blue-button"]} ${
            theme === "marino" ? styles.active : ""
          }`}
          onClick={() => handleThemeChange("marino")}
        >
          Marino
        </button>
        <button
          className={`${styles["floral-button"]} ${
            theme === "floral" ? styles.active : ""
          }`}
          onClick={() => handleThemeChange("floral")}
        >
          Floral
        </button>
        <NavEcommerce theme={theme} />
        <div>
          <h1 className={styles.title}>Creador de Banners</h1>

          <form onSubmit={handlerSubmitBanner}>
            <input
              type="text"
              placeholder="Introduce el texto del Banner Aqui."
              className={styles.inputBanner}
              name="bannerText"
              onChange={handlerIntputBanner}
            />
            <button className={styles.urbanBuy} type="submit">
              Guardar
            </button>
          </form>
          <Banner />
        </div>
        {/* <h1 className={styles.title}>Estilo de barras de busqueda</h1>
        <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleOne" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleOne")}>Minimalista</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleTwo" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleTwo")}>Moderno</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleThree" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleThree")}>Retro</button>
          <SearchBar searchBarTheme={searchBarTheme}/> */}
          
        {/* <h1>Visualizacion del producto</h1>
        <button
          className={`${styles["cardButtonClassic"]} ${
            cardStyle === "clasico" ? styles.active : ""
          }`}
          onClick={() => handleCardChange("clasico")}
        >
          Clasica
        </button>
        <button
          className={`${styles["babyButton"]} ${
            cardStyle === "baby" ? styles.active : ""
          }`}
          onClick={() => handleCardChange("baby")}
        >
          Baby
        </button> */}
      </div>
      {/* <UploadWidget /> */}
    </div>
  );
};

export default DashBoardEdit;
