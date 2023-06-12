import React, { useEffect } from 'react';
import style from './Banner.module.css';
import {useSelector} from "react-redux";
//import { ClientAdmin } from '../../data';



function Banner() {
 const clientAdmin = useSelector((state) => state.clientAdmin)
 const theme = useSelector((state) => state.theme);

  return (
    <div className= {style[theme]}>
      <h1 className={style.bannerText}>{clientAdmin.bannerText && clientAdmin.bannerText}</h1>
    </div>
  );
}

export default Banner;