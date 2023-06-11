import UploadWidget from "../../Components/UploadWidget/UploadWidget";
import React, { useState } from "react";
import styles from "./DashBoardEdit.module.css";
import NavEcommerce from "../../Components/EcommerceCliente/NavEcommerce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme, setSliderTheme, setSearchBarTheme, setCardStyle, setBanner, postBanner } from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar"; 
import Banner from '../../Components/EcommerceCliente/Banner';


const DashBoardEdit = () => {
  const theme = useSelector((state) => state.theme);
  const sliderTheme = useSelector((state) => state.sliderTheme)
  const searchBarTheme = useSelector((state) => state.searchBarTheme)
  const cardStyle = useSelector((state) => state.cardStyle);
  const [banner, setBanner] = useState({ bannertext: "", clientAdmin: "" });

  const clientAdminStorage = JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  
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

  const handleBanner =(selectedBanner) => {
    dispatch(setBanner(selectedBanner))
  }

  const handlerIntputBanner = (e) => {
    setBanner({
      ...banner,
      bannertext: e.target.value,
      clientAdmin: clientAdminStorage._id
    })
  }

  const handlerSubmitBanner = () => {
    console.log('handlersubmit', banner);
    //e.preventDefault();
    dispatch(postBanner(banner,  clientAdminStorage._id))
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
        <div>
        <h1 className={styles.title}>Creador de Banners</h1>

        <form onSubmit={handlerSubmitBanner}>
        <input type="text" placeholder="Introduce el texto del Banner Aqui." className={styles.inputBanner} name="bannerText" onChange={(e)=>handlerIntputBanner(e)}/>
        <button className={styles.urbanBuy} type="submit" >Guardar</button>
        </form>
        <Banner bannerText={banner.bannertext} />

        </div>
        {/* <h1 className={styles.title}>Estilo de barras de busqueda</h1>
        <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleOne" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleOne")}>Minimalista</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleTwo" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleTwo")}>Moderno</button>
         <button className={`${styles["SearchButton"]} ${searchBarTheme === "styleThree" ? styles.active : ""}`}
          onClick={() => handleSearchBarThemeChange("styleThree")}>Retro</button>
          <SearchBar searchBarTheme={searchBarTheme}/> */}
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

