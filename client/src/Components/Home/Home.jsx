import React from 'react'
import AppNavbar from '../Nav/AppNavBar'
import Introduction from "../Introduction/Introduction"
import Slider from '../Slider/Slider'
import Faq from '../Faq/Faq'
import CompraSegura from '../CompraSegura/CompraSegura'
import Footer from '../Footer/Footer'
import Team from '../Team/Team'
import './Home.css'
import ProductDetail from '../ProductDetail/ProductDetail'





export default function Home() {



  return (
      <div className='home-landing'>
        <AppNavbar/>
        
        <Introduction/>
        <Slider/>
        <CompraSegura/>
        <Faq/>
         <Team/>
       
    
<Footer/>
    </div>
  )
}
