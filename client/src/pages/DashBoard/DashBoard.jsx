import DashBoardCardCategory from "../../Components/DashBoardCardCategory/DashBoardCardCategory";
import DashBoardCardProducts from "../../Components/DashBoardCardProducts/DashBoardCardProducts";
import DashBoardCardsUser from "../../Components/DashBoardCardsUser/DashBoardCardsUser";
import logo from "../../assets/Logo.jpeg";
import ilustration from "../../assets/ilustrationhome.png";
import { Products, User, categoryProducts } from "../../data";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getClientAdminUsers } from "../../redux/actions";

const DashBoard = () => {
  const products = useSelector((state) => state.products);
  const productsSlice = products.slice(0, 4);
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  console.log(clientAdminStorage);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllProducts(clientAdminStorage._id));
    dispatch(getClientAdminUsers(clientAdminStorage._id));
  }, []);
  
  return (
    <div className="vh-100 w-100 d-flex justify-content-center overflow-hidden ">
      <div className="contianer-home">
        <div className="d-flex h-100 w-100">
          <div className="freaturedSettion">
            <div
              style={{
                height: "100%",
                width: "70%",
                marginLeft: 30,
              }}
            >
              {/* <p
                style={{
                  padding: 5,
                  background: "#eee6e6cc",
                  width: 200,
                  textAlign: "center",
                  borderRadius: 15,
                }}
              >
                Apr 11 2023 3:00 pm{" "}
              </p> */}
              <p></p>
              <h1
                style={{
                  fontWeight: 400,
                }}
              >
                Hello <strong>{clientAdminStorage.fullName} </strong>
              </h1>
              <p style={{ fontSize: 20 }}>
                Improve your products in our section.
              </p>
              <Link to={"/homecliente"}>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: 20,
                    width: 200,
                    marginTop: 15,
                    padding: 15,
                    borderRadius: 15,
                    background: "#ff7f2a",
                    border: "none",
                    color: "white",
                    fontWeight: 400,
                  }}
                >
                  Go Site View.
                </button>
              </Link>
            </div>

            <div style={{ width: "30%", height: "100%" }}>
              <img
                src={ilustration}
                style={{
                  width: "320px",
                  height: "320px",
                  position: "absolute",
                  top: -10,
                  right: 30,
                }}
                alt=""
              />
            </div>
          </div>
          {/* <div className="freaturedSettion2">
            <div className=" d-flex w-100 h-75 gap-4  align-items-center">
              <div className="container-image-logo">
                <img src={logo} alt="" />
              </div>
              <div className="d-flex flex-column h-50">
                <h1 className="TextlogoFreatured">UrbanBuy</h1>
                <p className="Text2Freatured">Ecommerce</p>
              </div>
            </div>
            <div className=" Todayshoppingvalue ">
              <h4>Today</h4>
              <h4>$ 350.000 CLP</h4>
            </div>
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: 20,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div
              style={{
                width: "100%",
                height: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: 20, padding: 10, margin: 10 }}>
                Add <strong> Categories.</strong>
              </h1>

              <p style={{ cursor: "pointer", padding: 10, margin: 10 }}>
                View all
              </p>
            </div> */}

            {/* <div
              style={{
                height: 130,
                width: "98%",
                padding: 10,
                display: "flex",
                gap: 10,
              }}
            >
              {categoryProducts.map((item, i) => (
                <DashBoardCardCategory key={i} category={item} />
              ))}
              {categoryProducts.length === 7 ? null : (
                <div
                  style={{
                    width: 140,
                    height: 110,
                    backgroundColor: "lightgray",
                    borderRadius: 15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IoMdAddCircleOutline
                    size={60}
                    color="white"
                    className="hoverCategory"
                    cursor={"pointer"}
                  />
                </div>
              )}
            </div> */}
            <div
              style={{
                width: "100%",
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <div className="">
                <h4 style={{ fontSize: 20 }}>
                  Most Selled <strong>Products.</strong>
                </h4>
              </div>

              {/* <div style={{ cursor: "pointer" }}>View all</div> */}
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "end",
                justifyContent: "space-around",
              }}
            >
              {productsSlice?.map((item, i) => (
                <DashBoardCardProducts
                  key={`cardproducts-${i}`}
                  products={item}
                />
              ))}
            </div>
          </div>
          {/* <div
            style={{
              height: "100%",
              width: "35%",
              display: "flex",
              alignContent: "center",
              marginLeft: 20,
              marginRight: -20,
            }}
          >
            <div
              style={{
                display: "flex",
                margin: 10,
                padding: 20,
                alignContent: "center",
                width: "100%",
                height: "100%",
                boxShadow: "4px 3px 20px 4px #4644442b",
                flexDirection: "column",
                borderRadius: 15,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  width: "100%",
                  height: "7%",
                }}
              >
                <h4>Recents Users</h4>
                <p style={{ cursor: "pointer" }}>View All</p>
              </div>
              <hr
                style={{
                  border: "1px solid #22212193",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                  padding: 10,
                  gap: 10,
                }}
              >
                {arrUser?.map((item) => (
                  <DashBoardCardsUser key={item.id} Users={item} />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
