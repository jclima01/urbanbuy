import React from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'

const ProductDetailContainer = () => {
    const {poductId} = useParams()
  return (
    <div>
        <ProductDetail productId={poductId}/>
    </div>
  )
}

export default ProductDetailContainer