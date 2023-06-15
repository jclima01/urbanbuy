import React from 'react'
import style from './TextoPrev.module.css';
import {useSelector} from "react-redux";

export default function TextoPrev() {
    const clientAdmin = useSelector((state) => state.clientAdmin)
    const theme = useSelector((state) => state.theme);
  return (
    <div className={style[theme]}>
      Conoce nuestros Productos
    </div>
  )
}
