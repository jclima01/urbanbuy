import { CiSearch } from "react-icons/ci";
import DashBoardTableProducts from "../../Components/DashBoardTableProducts/DashBoardTableProducts";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import DashBoardAddProducts from "../../Components/DashBoardAddProducts/DashBoardAddProducts";
import DashBoardModalAddCategories from "../../Components/DashBoardModalAddCategories/DashBoardModalAddCategories";

import styles from "./DashBoardProducts.module.css"
const DashBoardProducts = () => {
  const dispatch = useDispatch();
  const clientAdminStorage = JSON.parse(localStorage.getItem('clientAdmin')) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const refTransitionAddProduct = useRef();
  const products = useSelector((state) => state.products);
  const [isActive, setIsActive] = useState(900);

  const handleActiveAddProduct = (isActive) => {
    isActive ? setIsActive(0) : setIsActive(900);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [searchInput, setSearchInput] = useState('');

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
            }}
          >
            <span style={{fontSize: "26px"}}>
              <strong>Total </strong> Products {products.length}
            </span>
          </div>
          {/* <div
            style={{
              width: 400,
              height: 130,
              boxShadow: "4px 3px 10px 4px #4644442b",
              borderRadius: 20,
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
          </div> */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              gap:30,
              padding: 10,
              width: 200,
              height: 160,
              borderRadius: 20,
            }}
          >
            <button className={styles.button1} onClick={() => handleActiveAddProduct(isActive)}>
              Add Product
            </button>
            <button className={styles.button1} onClick={handleShow}>Set Categories</button>
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
            }}
          >
            {/* <div
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
                Order
              </span>
            </div> */}
            {/* <div
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
                filter
              </span>
            </div> */}
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
            {/* <div style={{ width: "20%" }}>
              <span>- 1 2 3 4 5 -</span>
            </div> */}
          </div>
        </div>
        <div
          style={{
            height: "60%",
            width: "95%",
            padding: 15,
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <DashBoardTableProducts searchInput={searchInput} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardProducts;
