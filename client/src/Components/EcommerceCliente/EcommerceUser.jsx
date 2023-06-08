import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './EcommerceUser.module.css';
import { useParams } from 'react-router-dom';
import { getAllProducts, getCategories, getClientAdminByDomain } from '../../redux/actions';
import NavEcommerce from './NavEcommerce';

function EcommerceUser() {
  // const {domain} = useParams()
  const clientAdmin = useSelector(state => state.clientAdmin)
  const clientAdminId = clientAdmin._id;
const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getClientAdminByDomain(domain));
    // if(clientAdmin) {
    dispatch(getAllProducts(clientAdminId));
    dispatch(getCategories(clientAdminId));
    // }
  }, [dispatch, clientAdminId]);

  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchValue = urlSearchParams.get('search');
    const categoryValue = urlSearchParams.get('category');

    let filteredResult = products;

    if (searchValue) {
      filteredResult = filteredResult.filter((product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (categoryValue) {
      filteredResult = filteredResult.filter((product) =>
        product.categories.some(
          (category) => category.categoryName === categoryValue
        )
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
    } else if (sortBy === 'mayorMenorR') {
      filteredResult = filteredResult.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'menorMayorR') {
      filteredResult = filteredResult.sort((a, b) => a.rating - b.rating);
    }

    setFilteredProducts(filteredResult);
  }, [products, sortBy, ratingFilter, window.location.pathname]);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <NavEcommerce clientAdmin={clientAdmin}/>
    <div className={styles.container}>

      <div className={styles.filters}>
        <div className={styles.filtercontainer}>
          <button onClick={handleSortByAZ}>A-Z</button>
          <button onClick={handleSortByZA}>Z-A</button>
          <button onClick={handleSortByPrice}>Mayor a Menor Precio</button>
          <button onClick={handleSortByPriceReverse}>Menor a Mayor Precio</button>
          <button onClick={handleSortByRating}>Menor a Mayor Rating</button>
          <button onClick={handleSortByRatingReverse}>Menor a Mayor Rating</button>
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
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}

export default EcommerceUser;
