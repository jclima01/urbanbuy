import React, { useEffect } from 'react';
import style from './Banner.module.css';
import {useSelector} from "react-redux";
//import { ClientAdmin } from '../../data';



function Banner() {
 const clientAdmin = useSelector((state) => state.clientAdmin)

  return (
    <div>
      <h3>Componente Baneer</h3>
      <h1>{clientAdmin.bannerText && clientAdmin.bannerText}</h1>
    </div>
  );
}

export default Banner;