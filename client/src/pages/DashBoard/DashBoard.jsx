import DashBoardCardCategory from "../../Components/DashBoardCardCategory/DashBoardCardCategory";
import logo from "../../assets/Logo.jpeg";
import ilustration from "../../assets/ilustrationhome.png";
import { categoryProducts } from "../../data";

const DashBoard = () => {
  return (
    <div className="vh-100  d-flex justify-content-center">
      <div className="contianer-home">
        <div className="d-flex   h-50 w-100">
          <div className="freaturedSettion">
            <div
              style={{
                height: "100%",
                width: "70%",
                marginLeft: 30,
              }}
            >
              <p
                style={{
                  padding: 5,
                  background: "#eee6e6cc",
                  width: 200,
                  textAlign: "center",
                  borderRadius: 15,
                }}
              >
                Apr 11 2023 3:00 pm{" "}
              </p>
              <h1
                style={{
                  fontWeight: 400,
                }}
              >
                Hello <strong>Henry Carrilo, </strong>
              </h1>
              <p style={{ fontSize: 20 }}>
                Improve your products in our section.
              </p>
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
          <div className="freaturedSettion2">
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
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            marginTop: 10,
            padding: 10,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "64%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
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
            </div>

            <div
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
            </div>
            <div
              style={{
                width: "100%",
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <div className="">
                <h4>
                  Bets <strong>Shopping</strong>{" "}
                </h4>
              </div>

              <div style={{ cursor: "pointer" }}>View all</div>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                backgroundColor: "red",
                alignItems: "end",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent:'flex-end',                  
                  width: "250px",
                  height: "160px",
                  backgroundColor: "blue",
                  position: "relative",
                  borderRadius:15
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "120px",
                    backgroundColor: "green",
                    position: "absolute",
                    top:'-50px',
                    borderRadius:'50%'
                  }}
                >
                  <img src="" alt="" />
                </div>
                <h1
                  style={{
                    color: "white",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                >
                  tittle
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "100&",
              width: "30%",
            }}
          >
            <h1>Recents Users</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
