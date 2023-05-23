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
  const [orderedProduct, setOrderedProduct] = useState([])

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

  {/* Filter */}
  const filterProduct = (e) => {
    if(e.target.value === ''){
      setFilteredProducts(products)
    } else {
    const filterRating = e.target.value
    const filterResult = products.filter(p => p.rating == filterRating)  
    setFilteredProducts(filterResult)
    paginate(1)
  }}

  {/* Search */}
  const handleSearch = (searchTerm) => {
     setSearchTerm(searchTerm)
    if(searchTerm.length > 0){
     const searchResult = filteredProduct.filter(p => p.productName.toLowerCase().includes(searchTerm))
     setFilteredProducts(searchResult)
    } else {
      setFilteredProducts(products)
    }
  }

  {/* Order */}
  const handleOrder = (order) =>{
    let orderResult = [] 
    if(order === 'price'){
      orderResult = [...filteredProduct].sort((a, b) => a.price > b.price ? 1 : -1)
      console.log('price', orderResult)
    } else if (order === 'name'){
      orderResult = [...filteredProduct].sort((a, b) => a.productName.localeCompare(b.productName))
      console.log('name', orderResult)
    }
     setFilteredProducts(orderResult)
     paginate(1)
  }

  /*Paginado*/
  const [productsPerPage] = useState(4); // Number of products to display per page
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
      <NavEcommerce/>
      <SliderEcommerceClient products={products}/>
      <h2 className={style.h2}>PRODUCTOS DESTACADOS</h2>
      <br/>
      <SearchBar onSearch={handleSearch} />
      <h2 className={style.h2}>PRODUCTOS </h2>
      {/*<Filter filter={products} onFilterChange={filterProduct}/>*/}
      {/* Filter */}
      <p>Filtrar por rating: </p>
      <select onChange={filterProduct}>
        <option value='' default selected>Elegir rating</option>
        {rating.map(r => {
          return <option key={r} value={r}>{r}</option>
        })}
      </select>
      {/* Order */}
      <div>
        <p>Ordenar por:</p>
        <button onClick={() => handleOrder('price')}>Precio</button>
        <button onClick={() => handleOrder('name')}>Nombre</button>
      </div>

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

    </div>
  )
}

export default HomeEcommerce
