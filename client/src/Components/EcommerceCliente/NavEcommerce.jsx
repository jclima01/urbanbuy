// NavEcommerce.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logoBlanco from '../../Img/logoBlanco.png';
import style from '../EcommerceCliente/NavEcommerce.module.css';
import EcommerceUser from './EcommerceUser';

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState('');
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const searchResult = products.filter((product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase())
      );
      const selectedProductIds = searchResult.map((product) => product.productName);
      const query = new URLSearchParams({ search: searchValue, products: selectedProductIds.join(',') }).toString();
      navigate(`/ecommerceuser?${query}`);
    }
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
      <div className={style.input}>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
       className={style.inputSearch}
        placeholder="  Buscar producto"
      />
      </div>
    </div>
  );
}

export default NavEcommerce;
