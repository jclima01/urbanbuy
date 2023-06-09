import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoBlanco from "../../Img/logoBlanco.png";
import style from "../EcommerceCliente/NavEcommerce.module.css";
import Avatar from "../Avatares/AvatarUser";
import Modal from "react-modal";
import { logOutUser } from "../../redux/actions";
import { Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";

function NavEcommerce({ clientAdmin }) {
  const [searchValue, setSearchValue] = useState("");
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const user = useSelector((state) => state.user);
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const queryString = selectedCategory
      ? `?category=${encodeURIComponent(selectedCategory)}`
      : "";
    navigate(`/${clientAdmin.domain}/s${queryString}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const queryString = selectedCategory
        ? `?search=${encodeURIComponent(
            searchValue
          )}&category=${encodeURIComponent(selectedCategory)}`
        : `?search=${encodeURIComponent(searchValue)}`;
      navigate(`/${clientAdmin.domain}/s${queryString}`);
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
    navigate(`/${clientAdmin.domain}`); // Redirige al inicio de la aplicación
  };

  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <img src={logoBlanco} alt="" className={style.logoClient} />
        <select
          className={`${style.select} ${style.categorias}`}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Categorías ▼</option>
          {categories.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div className={style.middleSection}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={style.inputSearch}
          placeholder="Buscar producto"
        />
      </div>
      <div className={style.rightSection}>
        {Object.entries(user).length !== 0 ? (
          <div className={style.userContainer}>
            <h4 className={style.hola}>
              Hola <strong>{user.fullName}!</strong>
            </h4>
            <div className={style.avatar} onClick={openMenu}>
              <Avatar size={40} />
            </div>
            
              <CartWidget />
            

            {showMenu && (
              <div className={style.dropdownContainer}>
                <div className={style.dropdownMenu}>
                  <Dropdown show={showMenu} onClose={closeMenu}>
                    {/* <Dropdown.Toggle variant="light" id="avatar-dropdown" /> */}
                    <Dropdown.Menu className={style.dropdownMenu}>
                      <Dropdown.Item href="#opcion1">Opción 1</Dropdown.Item>
                      <Dropdown.Item href="#opcion2">Opción 2</Dropdown.Item>
                      {/* Agrega aquí más opciones según tus necesidades */}
                      <Dropdown.Divider className={style.dropdownDivider} />
                      <Dropdown.Item onClick={closeMenu}>Cerrar</Dropdown.Item>
                      <Dropdown.Divider className={style.dropdownDivider} />
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={style.SingnIn}>
            <Link to="/signInClient">
              <button className={style.button1}>Sign In</button>
            </Link>
            <Link to="/loginClient">
              <button className={style.button2}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavEcommerce;
