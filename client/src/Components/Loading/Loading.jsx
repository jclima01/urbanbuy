import React from "react";
import s from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loader}></div>
    </div>
  );
};

export default Loading;
