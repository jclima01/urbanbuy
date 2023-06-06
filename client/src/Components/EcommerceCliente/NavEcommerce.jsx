import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logoBlanco from '../../Img/logoBlanco.png';
import style from '../EcommerceCliente/NavEcommerce.module.css';

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState('');
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const queryString = selectedCategory
      ? `?category=${encodeURIComponent(selectedCategory)}`
      : '';
    navigate(`/ecommerceuser${queryString}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const queryString = selectedCategory
        ? `?search=${encodeURIComponent(searchValue)}&category=${encodeURIComponent(
            selectedCategory
          )}`
        : `?search=${encodeURIComponent(searchValue)}`;
      navigate(`/ecommerceuser${queryString}`);
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
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={style.inputSearch}
          placeholder='  Buscar producto'
        />
       <select className={`${style.categorias} ${style.select}`} value={selectedCategory} onChange={handleCategoryChange}>

          <option  value=''>  Categorías   ▼ </option>
          {categories.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default NavEcommerce;
