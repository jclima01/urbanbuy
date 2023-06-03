import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './EcommerceUser.module.css';

function EcommerceUser() {
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchValue = urlSearchParams.get('search');

    let filteredResult = products;

    if (searchValue) {
      filteredResult = filteredResult.filter((product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (ratingFilter) {
      filteredResult = filteredResult.filter(
        (product) => product.rating >= parseInt(ratingFilter)
      );
    }

    if (sortBy === 'az') {
      filteredResult = filteredResult.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    } else if (sortBy === 'za') {
      filteredResult = filteredResult.sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    } else if (sortBy === 'mayorMenor') {
      filteredResult = filteredResult.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'menorMayor') {
      filteredResult = filteredResult.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filteredResult);
  }, [products, sortBy, ratingFilter]);

  const handleSortByAZ = () => {
    setSortBy('az');
  };

  const handleSortByZA = () => {
    setSortBy('za');
  };

  const handleSortByPrice = () => {
    setSortBy('mayorMenor');
  };

  const handleSortByPriceReverse = () => {
    setSortBy('menorMayor');
  };

  const handleRatingFilter = (e) => {
    setRatingFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
  <div className={styles.filters}>
    <h1>Resultados de la búsqueda</h1>
    <div className={styles.filtercontainer}>
      <button onClick={handleSortByAZ}>A-Z</button>
      <button onClick={handleSortByZA}>Z-A</button>
      <button onClick={handleSortByPrice}>Mayor a Menor</button>
      <button onClick={handleSortByPriceReverse}>Menor a Mayor</button>
      <select value={ratingFilter} onChange={handleRatingFilter}>
        <option value="">Filtrar por Rating</option>
        <option value="3">3 estrella</option>
        <option value="3,5">3,5 estrellas</option>
        <option value="4">4 estrellas</option>
        <option value="4,5">4,5 estrellas</option>
        <option value="5">5 estrellas</option>
      </select>
    </div>
  </div>
  <div className={styles.cards}>
    <Card products={filteredProducts} />
  </div>
</div>








  );
}

export default EcommerceUser;
