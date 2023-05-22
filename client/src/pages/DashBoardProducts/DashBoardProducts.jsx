import { CiSearch } from "react-icons/ci";
import DashBoardTableProducts from "../../Components/DashBoardTableProducts/DashBoardTableProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

const DashBoardProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const clientAdminId = clientAdmin._id;
  console.log(clientAdmin);
  useEffect(() => {
    dispatch(getAllProducts(clientAdminId));
  }, []);

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
        }}
      >
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
            }}
          >
            <h1>test</h1>
          </div>
          <div
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              padding: 10,
              width: 200,
              height: 160,
              borderRadius: 20,
            }}
          >
            <button>Add Product</button>
            <button>Add Categories</button>
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
                Order
              </span>
            </div>
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
                filter
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
              />
              <CiSearch size={23} />
            </div>
            <div style={{ width: "20%" }}>
              <span>- 1 2 3 4 5 -</span>
            </div>
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
          <DashBoardTableProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardProducts;
