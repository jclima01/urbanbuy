import { useEffect, useState } from "react";
import NavEcommerce from "./NavEcommerce";
import SliderEcommerceClient from "../EcommerceCliente/SliderEcommerceClient";
import style from "./HomeEcommerce.module.css";
import Card from "../Card/Card";
import BANNER from "../../Img/BANNER.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategories,
  getClientAdminByDomain,
} from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar";

import { useParams } from "react-router-dom";

import Modal from "react-modal";
import pagos from "../../Img/pagos.png";
import envios from "../../Img/envios.png";
import { Route, Routes } from "react-router-dom";
import EcommerceUser from "./EcommerceUser";
import Banner from "./Banner";
import TextoPrev from "./TextoPrev";
import FooterEcommerce from "./FooterEcommerce";
import Modals from "./Modals";

function HomeEcommerce() {
  const { domain } = useParams();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const clientAdminId = clientAdmin._id;
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  useEffect(() => {
    dispatch(getClientAdminByDomain(domain));
    if (clientAdmin) {
      dispatch(getAllProducts(clientAdminId));
      dispatch(getCategories(clientAdminId));
    }
  }, [dispatch, clientAdminId]);

  useEffect(() => {
    setFilteredProducts(products);
    setSearchTerm(products);
  }, [products]);

  const rating = Array.from(new Set(products.map((p) => p.rating)));

  // Filter
  const filterProduct = (e) => {
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filterRating = e.target.value;
      const filterResult = products.filter((p) => p.rating == filterRating);
      setFilteredProducts(filterResult);
      paginate(1);
    }
  };

  // Search
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.length > 0) {
      const searchResult = filteredProduct.filter((p) =>
        p.productName.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(searchResult);
    } else {
      setFilteredProducts(products);
    }
  };

  // Order
  const handleOrder = (order) => {
    let orderResult = [];
    if (order === "priceAs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
    } else if (order === "priceDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
    } else if (order === "nameAs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    } else if (order === "nameDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }
    setFilteredProducts(orderResult);
    paginate(1);
  };

  // Paginado
  const [productsPerPage] = useState(5); // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenS, setIsModalOpenS] = useState(false);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalS = () => {
    setIsModalOpenS(true);
  };
  const closeModalS = () => {
    setIsModalOpenS(false);
  };
  const containerClass = isDarkMode
    ? `${style.fondo} ${style.darkMode}`
    : style.fondo;

  return (
    <div className={style.homeEcommerceContainer}>
      <div className={containerClass}>
        <NavEcommerce clientAdmin={clientAdmin} />
        {/* <div className={style.switchContainer}>
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className={style.slider}></span>
          </label>
        </div> */}

        <Routes>
          <Route
            exact
            path={`${clientAdmin.domain}/s`}
            element={<EcommerceUser />}
          />
        </Routes>

        <div>
          <Banner/>
        </div>
        <TextoPrev/>

        <div className={style.card}>
          <Card products={currentProducts} maxRating={rating} />
        </div>

     <Modals/>

        {/* <div className={style.filterSearchContainer}>
        <div className={style.searchContainer}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className={`${style.filterContainer} ${style[theme]}`}>
          <p>Filtrar por rating:</p>
          <select onChange={filterProduct}>
            <option value="" defaultSelected>
              Elegir rating
            </option>
            {rating.map((r) => {
              return (
                <option key={r} value={r}>
                  {r}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`${style.buttonDiv} ${style[theme]}`} >
          <p>Ordenar por:</p>

          <button onClick={() => handleOrder("priceAs")}>Precio Ascendente</button>
          <button onClick={() => handleOrder("priceDs")}>Precio Descendente</button>
          <button onClick={() => handleOrder("nameAs")}>Nombre A - Z</button>
          <button onClick={() => handleOrder("nameDs")}>Nombre Z - A</button>
        </div>

      </div>

      <div>
        {filteredProduct.length > productsPerPage && (
          <ul className="pagination">
            {Array(Math.ceil(filteredProduct.length / productsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                    }`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div> */}

        <div>
          
       <FooterEcommerce/>
        </div>
      </div>
    </div>
  );
}

export default HomeEcommerce;
