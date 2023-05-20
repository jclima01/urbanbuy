import React from 'react'
import NavEcommerce from './NavEcommerce'
import Filter from '../Filter/Filter'
import FooterEcommerce from './FooterEcommerce'
import SliderEcommerceClient from '../EcommerceCliente/SliderEcommerceClient'
import style from './HomeEcommerce.module.css'
import Card from '../Card/Card'
import cuotas from '../../Img/cuotas.png'

function HomeEcommerce() {
  return (
    <div>
      <NavEcommerce/>
      <SliderEcommerceClient/>
      <h2 className={style.h2}>PRODUCTOS DESTACADOS</h2>
      <Card/>
      <img src={cuotas} alt=''/>
      <br/>
      
      <h2 className={style.h2}>PRODUCTOS </h2>
      <Filter/>
      <Card/>

      <br/>
     
    </div>
  )
}

export default HomeEcommerce