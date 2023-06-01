import { useEffect, useState } from "react";
import NavEcommerce from "./NavEcommerce";
import SliderEcommerceClient from "../EcommerceCliente/SliderEcommerceClient";
import style from "./HomeEcommerce.module.css";
import Card from "../Card/Card";
import BANNER from '../../Img/BANNER.PNG'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCategories } from "../../redux/actions";
import SearchBar from "../../SearchBar/SearchBar";

function HomeEcommerce() {
  const clientAdmin = JSON.parse(localStorage.getItem('clientAdmin')) ?? false
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const clientAdminId = clientAdmin._id;
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [orderedProduct, setOrderedProduct] = useState([]);
  const theme = useSelector(state => state.theme)


  useEffect(() => {
    dispatch(getAllProducts(clientAdminId));
    dispatch(getCategories(clientAdminId));
  }, [dispatch, clientAdminId]);

  useEffect(() => {
    setFilteredProducts(products);
    setSearchTerm(products);
  }, [products]);

  const rating = Array.from(new Set(products.map((p) => p.rating)));

  {
    /* Filter */
  }
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

  {
    /* Search */
  }
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

  {
    /* Order */
  }
  const handleOrder = (order) => {
    let orderResult = [];
    if (order === "priceAs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      console.log("price", orderResult);

    } else if (order === "priceDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        a.price > b.price ? -1 : 1)
    } else if  (order === "nameAs") {

      orderResult = [...filteredProduct].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
      console.log("name", orderResult);
    } else if (order === "nameDs") {
      orderResult = [...filteredProduct].sort((a, b) =>
        b.productName.localeCompare(a.productName))

    }
    setFilteredProducts(orderResult);
    paginate(1);
  };

  /*Paginado*/
  const [productsPerPage] = useState(5); // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log("filterProduct: ", filteredProduct);

  return (
    <div className={style.fondo}>
      <NavEcommerce/>
      {/* <SliderEcommerceClient products={products} /> */}

     <div>
      <img src={BANNER}  className={style.banner}></img>
     </div>
     <h1 className={style.h1}> LOS MAS VENDIDOS</h1>
     <Card products={currentProducts} maxRating={rating} />
<div className={style.faq}>
<h6>Metodos de pago</h6>
<h6>Compra segura</h6>
</div>
    
      {/* <div className={style.filterSearchContainer}>
        <div className={style.searchContainer}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className={`${style.filterContainer} ${style[theme]}`}>
          <p>Filtrar por rating:</p>
          <select  onChange={filterProduct}>
            <option value="" default selected>
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

        <button  onClick={() => handleOrder("priceAs")}>Precio Ascendente</button>
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
        <footer className={style.footer}>Derechos reservados UrbanBuy@copy2023</footer>
      </div>
    </div>
  );
}

export default HomeEcommerce;
