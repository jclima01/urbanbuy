import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductDetailContainer = () => {
    const {poductId} = useParams()
  return (
    <div>
        <ProductDetail productId={poductId}/>
    </div>
  )
}

export default ProductDetailContainer