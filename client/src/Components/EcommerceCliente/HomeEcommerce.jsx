import { useEffect, useState } from 'react'
import NavEcommerce from './NavEcommerce'
import SliderEcommerceClient from '../EcommerceCliente/SliderEcommerceClient'
import style from './HomeEcommerce.module.css'
import Card from '../Card/Card'

import { useDispatch, useSelector } from 'react-redux'
import {getAllProducts, getCategories} from '../../redux/actions'
import SearchBar from '../../SearchBar/SearchBar'

function HomeEcommerce() {
  const clientAdmin = useSelector((state) => state.clientAdmin)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const clientAdminId = clientAdmin._id
  const [filteredProduct, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  useEffect(() =>{
    dispatch(getAllProducts(clientAdminId))
    dispatch(getCategories(clientAdminId))
  }, [dispatch, clientAdminId])

  useEffect(() =>{
    setFilteredProducts(products)
    setSearchTerm(products)
  }, [products])
 
  const rating = Array.from(
    new Set(products.map(p => p.rating))
  )

  const filterProduct = (e) => {
    if(e.target.value === ''){
      setFilteredProducts(products)
    } else {
    const filterRating = e.target.value
    const filterResult = products.filter(p => p.rating == filterRating)  
    setFilteredProducts(filterResult)
  }}

  const handleSearch = (searchTerm) => {
     setSearchTerm(searchTerm)
    if(searchTerm.length > 0){
     const searchResult = filteredProduct.filter(p => p.productName.toLowerCase().includes(searchTerm))
    setFilteredProducts(searchResult)
    }
    else {
      setFilteredProducts(products)
    }
  }

  /*Paginado*/
  const [productsPerPage] = useState(2); // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  console.log('filterProduct: ', filteredProduct)
  
  return (
    <div>
      {/* <NavEcommerce/> */}
      <SliderEcommerceClient products={products} />

      <h2 className={style.h2}>PRODUCTOS </h2>
<<<<<<< HEAD

      <div className={style.filterSearchContainer}>
        <div className={style.filterContainer}>
          <p>Filtrar por rating:</p>
          <select onChange={filterProduct}>
            <option value='' disabled defaultValue>
              Elegir rating
            </option>
            {rating.map((r) => {
              return <option key={r} value={r}>{r}</option>
            })}
          </select>
        </div>
        <div className={style.searchContainer}>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <Card products={filteredProduct} />
=======
      {/*<Filter filter={products} onFilterChange={filterProduct}/>*/}
       <p>Filtrar por rating: </p>
      <select onChange={filterProduct}>
        <option value='' default selected>Elegir rating</option>
        {rating.map(r => {
          return <option key={r} value={r}>{r}</option>
        })}
      </select>

      <Card products={currentProducts} />
  
      {/* Pagination */}
      <div>
        {filteredProduct.length > productsPerPage && (
          <ul className="pagination">
            {Array(Math.ceil(filteredProduct.length / productsPerPage))
              .fill()
              .map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>

>>>>>>> 8c0223f4bc2fc5c3d207bc782d5367ed7aa03246
    </div>
  )
}

export default HomeEcommerce
