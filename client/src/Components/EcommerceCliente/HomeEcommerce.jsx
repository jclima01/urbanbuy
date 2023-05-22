import { useEffect, useState } from 'react'
import NavEcommerce from './NavEcommerce'
import Filter from '../Filter/Filter'
import SliderEcommerceClient from '../EcommerceCliente/SliderEcommerceClient'
import style from './HomeEcommerce.module.css'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import {getAllProducts, getCategories} from '../../redux/actions'

function HomeEcommerce() {
  const clientAdmin = useSelector((state) => state.clientAdmin)
  const products = useSelector((state) => state.products)
  const categories = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const clientAdminId = clientAdmin._id
  const [filteredProduct, setFilteredProducts] = useState([])

  useEffect(() =>{
    dispatch(getAllProducts(clientAdminId))
    dispatch(getCategories(clientAdminId))
  }, [dispatch, clientAdminId])

  useEffect(() =>{
    setFilteredProducts(products)
  }, [products])
 
  console.log(products)
  console.log(categories)
  const filterProduct = (category) => {
    if(category.length  === 0){
      setFilteredProducts(products)
    } else {
      const filtered = products.filter((product) => product.categories?.some(cat => cat.categoryName === category))
    setFilteredProducts(filtered)
  }}

  return (
    <div>
      <NavEcommerce/>
      <SliderEcommerceClient products={products}/>
      <h2 className={style.h2}>PRODUCTOS DESTACADOS</h2>
      <br/>
      
      <h2 className={style.h2}>PRODUCTOS </h2>
      <Filter categories={categories} onCategoryChange={filterProduct}/>
      <Card products={filteredProduct} />
     
    </div>
  )
}

export default HomeEcommerce
