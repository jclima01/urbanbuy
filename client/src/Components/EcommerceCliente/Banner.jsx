import React, { useEffect } from 'react';
import style from './Banner.module.css';
import { useDispatch, useSelector } from "react-redux";
//import { ClientAdmin } from '../../data';
import { getBanner } from '../../redux/actions'; 


function Banner({ bannerText }) {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.banner);
  const clientAdminStorage = JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  console.log(clientAdminStorage);

  useEffect(()=>{
    dispatch(getBanner(clientAdminStorage._id))
  },[dispatch]);

  return (
    <div>
      <h3>Componente Baneer</h3>
      <h1>{bannerText}</h1>
    </div>
  );
}

export default Banner;