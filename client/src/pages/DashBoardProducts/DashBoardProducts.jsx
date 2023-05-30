import { CiSearch } from "react-icons/ci";
import DashBoardTableProducts from "../../Components/DashBoardTableProducts/DashBoardTableProducts";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getAllProducts, getCategories } from "../../redux/actions";
import DashBoardAddProducts from "../../Components/DashBoardAddProducts/DashBoardAddProducts";
import DashBoardModalAddCategories from "../../Components/DashBoardModalAddCategories/DashBoardModalAddCategories";

import styles from "./DashBoardProducts.module.css";
import DashBoardEditProduct from "../../Components/DashBoardEditProduct/DashBoardEditProduct";
import Pagination from "../../../src/pages/DashBoardUser/Pagination/Pagination";
import DashBoardSetCategory from "../../Components/DashBoardSetCategory/DashBoardSetCategory";
const DashBoardProducts = () => {
  //Variables
  const [cateriatest, settest] = useState(null);
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const refTransitionAddProduct = useRef();
  const products = useSelector((state) => state.products);
  const [isActive, setIsActive] = useState(1200);

  // Pagination
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [setActualPage, setSetActualPage] = useState(1);

  //Sort
  const [sort, setSort] = useState("");

  //Handles and variables

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [searchInput, setSearchInput] = useState("");
  const handleActiveAddProduct = (isActive) => {
    isActive ? setIsActive(0) : setIsActive(1200);
  };

  //Get All products
  useEffect(() => {
    dispatch(getAllProducts(clientAdminId));
  }, [dispatch]);

  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "90%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "4px 3px 10px 4px #4644442b",
          borderRadius: 25,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "4px 3px 10px 4px #4644442b",
            right: `-${isActive}px`,
            borderRadius: 25,
            transition: "0.5s all ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={refTransitionAddProduct}
        >
          <DashBoardEditProduct />

          <DashBoardAddProducts
            setIsActive={setIsActive}
            clientAdminId={clientAdminId}
          />

          <DashBoardModalAddCategories show={show} setShow={setShow} />
        </div>

        <div
          style={{
            height: "25%",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: 30,
          }}
        >
          <div
            style={{
              width: 400,
              height: 130,
              boxShadow: "4px 3px 10px 4px #4644442b",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 15,
            }}
          >
            <span style={{ fontSize: "26px" }}>
              <strong>Total </strong> Products
            </span>
            <span className={styles.spanTotalProducst}>{products.length}</span>
          </div>
          <div
            style={{
              width: 900,
              height: 130,
              boxShadow: "4px 3px 10px 4px #4644442b",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>test</h1>
          </div> 
          <div
            style={{
              width: 500,
              height: 130,
              backgroundColor: "#ff7f2a",
              boxShadow: "4px 3px 10px 4px #4644442b",
              borderRadius: 20,
            }}
          >
            <h1>test</h1>
          </div> 

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              gap: 30,
              padding: 10,
              width: 200,
              height: 160,
              borderRadius: 20,
            }}
          >
            <button
              className={styles.button1}
              onClick={() => handleActiveAddProduct(isActive)}
            >
              Add Product
            </button>
            <button className={styles.button1} onClick={handleShow}>
              Set Categories
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            height: "8%",
            width: "95%",
            padding: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 5,
              gap: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10%",
              }}
            >
              <span
                style={{
                  padding: "2px 30px",
                  backgroundColor: "lightgray",
                  borderRadius: 20,
                }}
              >
                <select
                  className={styles.selectsortProduct}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="">Seleccione</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                  <option value="rasc">Rating Asc</option>
                  <option value="rdes">Rating Des</option>
                  <option value="sasc">Stock Asc</option>
                  <option value="sdes">Stock Desc</option>
                  <option value="pasc">Price Asc</option>
                  <option value="pdes">Price Desc</option>
                </select>
              </span>
            </div>
            <div
              style={{
                width: "80%",
                height: "100%",
                backgroundColor: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: 10,
              }}
            >
              <input
                type="text"
                placeholder="Search Products"
                className="inputDashboard-Products"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <CiSearch size={23} />
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pagination
                usersPerPage={productsPerPage}
                numberOfUsers={products.length}
                setActualPage={setSetActualPage}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.scrrolbar}
          style={{
            height: "60%",
            width: "95%",
            padding: 15,
            overflow: "hidden",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <DashBoardTableProducts
            searchInput={searchInput}
            setIsActive={setIsActive}
            productsPerPage={productsPerPage}
            setActualPage={setActualPage}
            sort={sort}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardProducts;
