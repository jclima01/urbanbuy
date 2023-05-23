import React, { useState } from "react";
import s from "./Pagination.module.css";

const Pagination = ({ usersPerPage, numberOfUsers, setActualPage }) => {
    
  const [page, setPage] = useState(1);
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(numberOfUsers / usersPerPage); i++) {
    numberOfPages.push(i);
  }
  const pag = (num) => {
    setActualPage(num);
    setPage(num);
  };
  return (
    <div className={s.paginationContainer}>
      {numberOfPages?.map((numberOfPage) => (
        <button
          key={numberOfPage}
          className={page === numberOfPage ? s.btnSelected : s.btn}
          onClick={() => pag(numberOfPage)}
        >
          {numberOfPage}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
