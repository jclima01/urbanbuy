// NavEcommerce.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import logoBlanco from '../../Img/logoBlanco.png'
import style from '../EcommerceCliente/NavEcommerce.module.css'
import EcommerceUser from './EcommerceUser'

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState("");
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const filterProducts = (inputValue) => {
    if (inputValue.length > 0) {
      const searchResult = products.filter((product) =>
        product.productName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(searchResult);
    } else {
      setFilteredProducts([]);
    }
  };

  const formatOptionLabel = ({ label, value }) => (
    <div>
      <span>{label}</span>
    </div>
  );

  const handleSelectChange = (selectedOptions) => {
    const selectedProductIds = selectedOptions.map((option) => option.value);
    const query = new URLSearchParams({ search: searchValue, products: selectedProductIds.join(',') }).toString();
    navigate(`/ecommerceuser?${query}`);
  };
  

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
      <Select
        options={filteredProducts.map((product) => ({
          label: product.productName,
          value: product.id,
        }))}
        className={style.input}
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
  );
}

export default NavEcommerce;
