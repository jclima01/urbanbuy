import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoBlanco from '../../Img/logoBlanco.png';
import style from './NavEcommerce.module.css';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar/SearchBar';
import { getAllProducts,getCategories } from '../../redux/actions';
import Select from "react-select";
import { Link } from 'react-router-dom';

function NavEcommerce() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    dispatch(getAllProducts()); // Asegúrate de pasar los parámetros necesarios a la función getAllProducts si los requiere
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
  dispatch(getAllProducts());
}, [dispatch]);

useEffect(() => {
  setFilteredProducts(products);

  // Obtener las categorías del usuario
  const userCategories = getCategories(); // Asegúrate de ajustar esta llamada según tu implementación
  setCategories(userCategories);
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
      <img src={logoBlanco} alt='' className={style.logoClient}/>
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
    />
    </div>
      </div>
  );
};


export default NavEcommerce;
     
    
    
     
   
    
