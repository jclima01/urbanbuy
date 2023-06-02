import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoBlanco from '../../Img/logoBlanco.png';
import style from './NavEcommerce.module.css';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar/SearchBar';
import { getAllProducts, getCategories } from '../../redux/actions';
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import EcommerceUser from './EcommerceUser';

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProducts = (inputValue) => {
    if (inputValue.length > 0) {
      const searchResult = products.filter((product) =>
        product.productName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(searchResult);
    } else {
      setFilteredProducts(products);
    }
  };

  const formatOptionLabel = ({ label, value }) => (
    <div>
      <span>{label}</span>
    </div>
  );

  const handleSelectChange = (selectedOptions) => {
    // Redireccionar a la página de resultados con los productos seleccionados
    const selectedProductIds = selectedOptions.map((option) => option.value);
    const query = new URLSearchParams({ products: selectedProductIds.join(',') }).toString();
    navigate(`/ecommerceuser?${query}`);
  };

  console.log(filteredProducts);

  return (
    <div className={style.container}>
      <img src={logoBlanco} alt='' className={style.logoClient} />
      <div className={style.SingnIn}>
        <Link to='/signInClient'>
          <button className={style.button1}>SignIn</button>
        </Link>
        <Link to='/loginClient'>
          <button className={style.button2}>Login</button>
        </Link>
      </div>
      <div>
        <Select
          className={style.input}
          options={filteredProducts.map((product) => ({
            label: product.productName,
            value: product.id,
          }))}
          onInputChange={(inputValue) => {
            setSearchValue(inputValue);
            filterProducts(inputValue);
          }}
          menuIsOpen={Boolean(searchValue)}
          formatOptionLabel={formatOptionLabel}
          placeholder="Buscar producto"
          isMulti
          onChange={handleSelectChange}
        />
      </div>
      <EcommerceUser filteredProducts={filteredProducts} />
    </div>
  );
}

export default NavEcommerce;
