import React from 'react'
import NavEcommerce from './NavEcommerce'
import Filter from '../Filter/Filter'
import FooterEcommerce from './FooterEcommerce'
import SliderEcommerceClient from '../EcommerceCliente/SliderEcommerceClient'
import style from './HomeEcommerce.module.css'
import Card from '../Card/Card'
import cuotas from '../../Img/cuotas.png'
import { Col } from 'react-bootstrap'

function HomeEcommerce() {
  return (
    <div>
      <NavEcommerce/>
      {/* <SliderEcommerceClient/> */}
      {/* <h2 className={style.h2}>PRODUCTOS DESTACADOS</h2> */}
      {/* <Card/>
  <div className={style.img}>
            <img
              src={cuotas}
              alt="Mi imagen"
              className={style.img}
            />
       </div>
      <br/> */}
      
      <h2 className={style.h2}>PRODUCTOS </h2>
      <Filter/>
      <div className={style.containerCard}>
      <Card/>
      </div>
      <br/>
     
    </div>
  )
}

export default HomeEcommerce