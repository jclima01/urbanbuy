import React from 'react'
import AppNavbar from '../Nav/AppNavBar'
import Introduction from "../Introduction/Introduction"
import Slider from '../Slider/Slider'
import Faq from '../Faq/Faq'
import CompraSegura from '../CompraSegura/CompraSegura'
import Footer from '../Footer/Footer'
import Team from '../Team/Team'



export default function Home() {
  return (
      <div>
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
