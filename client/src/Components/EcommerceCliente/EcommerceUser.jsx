import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './EcommerceUser.module.css';

function EcommerceUser() {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const productsPerPage = 5;

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
    if (selectedCategory) {
      filteredResult = filteredResult.filter((product) =>
        product.categories.some(
          (category) => category.categoryName === selectedCategory
        )
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
    
    } else if (sortBy === 'mayorMenorR') {
      filteredResult = filteredResult.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'menorMayorR') {
      filteredResult = filteredResult.sort((a, b) => a.rating - b.rating);
    }
    setFilteredProducts(filteredResult);
  }, [products, sortBy, ratingFilter, selectedCategory]);

  {/*const filterProduct = (e) => {  
    if (e.target.value == "") {
        setFilteredProducts(products);
      } else {
        const filteredCategory = e.target.value;
        const filterResult = products.filter((p) => {
          return p.categories.some(
          (c) => c.categoryName === filteredCategory
        )
        })
        setFilteredProducts(filterResult)
        console.log('filter: ', filterResult)
  }}*/}

  const filterProduct = (e) => {
    const selectedCategory = e.target.value
    setSelectedCategory(selectedCategory)
  }


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
  const handleSortByRating = () => {
    setSortBy('mayorMenorR');
  };
  const handleSortByRatingReverse = () => {
    setSortBy('menorMayorR');
  };

  const handleRatingFilter = (e) => {
    setRatingFilter(e.target.value);
  };

  // Calculate indexes of the first and last products to be shown on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <h1>Resultados de la búsqueda</h1>
        <div className={styles.filtercontainer}>
          <button onClick={handleSortByAZ}>A-Z</button>
          <button onClick={handleSortByZA}>Z-A</button>
          <button onClick={handleSortByPrice}>Mayor a Menor Precio</button>
          <button onClick={handleSortByPriceReverse}>Menor a Mayor Precio</button>
          <button onClick={handleSortByRating}>Menor a Mayor Rating</button>
          <button onClick={handleSortByRatingReverse}>Menor a Mayor Rating</button>
          <select onChange={filterProduct}>
              <option value="">Elegir Categoria</option>
            {categories.map((c) => {
                  return (
                    <option key={c._id} value={c.categoryName}>
                      {c.categoryName}
                    </option>
                  );
                })}
            </select>
          
        </div>
      </div>
      <div className={styles.cards}>
        <Card products={currentProducts} />
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.active : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EcommerceUser;
