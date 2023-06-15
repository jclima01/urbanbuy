import React from 'react'
import style from './FooterEcommerce.module.css'
import {useSelector} from "react-redux";

function FooterEcommerce() {
  const clientAdmin = useSelector((state) => state.clientAdmin)
  const theme = useSelector((state) => state.theme);
  return (
    <div  className={style[theme]} >
        <p>Todos los derechos reservados. &copy;</p>
    </div>
  )
}

export default FooterEcommerce