import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoClient from '../../Img/logoClient.png';
import style from './NavEcommerce.module.css';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar/SearchBar';
import { getAllProducts } from '../../redux/actions';
import Select from "react-select";

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts()); // Asegúrate de pasar los parámetros necesarios a la función getAllProducts si los requiere
  }, [dispatch]);

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

  console.log(filteredProducts); // Imprime los productos filtrados en la consola

  return (
    <div className={style.container}>
      <img src={logoClient} alt='' className={style.logoClient}/>
        <div className={style.SingnIn}>
        <button className={style.button1}>SignIn</button>
        <button className={style.button2}>Login</button>
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
    />
    </div>
      </div>
  );
};


export default NavEcommerce;
     
    
    
     
   
    
