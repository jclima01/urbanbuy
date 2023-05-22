import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "./pages/DashBoard/DashBoard";
import SideBarDashBoard from "./Components/SideBarDashBoard/SideBarDashBoard";
import NavBarDashBoard from "./Components/NavBarDashBoard/NavBarDashBoard";
import DashBoardUser from "./pages/DashBoardUser/DashBoardUser";
import DashBoardEdit from "./pages/DashBoardEdit/DashBoardEdit";
import DashBoardProducts from "./pages/DashBoardProducts/DashBoardProducts";
import DashBoardShipping from "./pages/DashBoardShipping/DashBoardShipping";
import DashBoardSettings from "./pages/DashBoardSettings/DashBoardSettings";
import Home from "./Components/Home/Home";
import FormLogin from "./Components/FormLogin/FormLogin";
import SignIn from "./Components/SignIn/SignIn";
import Card from "./Components/Card/Card";
import HomeEcommerce from "./Components/EcommerceCliente/HomeEcommerce";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductDetailContainer from "./Components/EcommerceCliente/ProductDetailContainer";

function App() {
  // const dispatch = useDispatch()
  const session = useSelector((state) => state.UserSession);
  // useEffect(() => {
  //   dispatch(getSession())
  // }, [session])

  return (
    <>
      {session ? (
        <div className="d-flex vh-100 vw-100 ">
          <SideBarDashBoard />
          <div className="d-flex flex-column">
            <NavBarDashBoard />
            <Routes>
              <Route path="/dashBoard" element={<DashBoard />} />
              <Route path="/dashBoard/User" element={<DashBoardUser />} />
              <Route path="/dashBoard/Edit" element={<DashBoardEdit />} />
              <Route
                path="/dashBoard/Products"
                element={<DashBoardProducts />}
              />
              <Route
                path="/dashBoard/Shipping"
                element={<DashBoardShipping />}
              />
              <Route
                path="/dashBoard/Settings"
                element={<DashBoardSettings />}
              />
              <Route path="/homecliente" element={<HomeEcommerce />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} /> {/* LadingPage */}
          <Route path="/login" element={<FormLogin />} />
          <Route path="/SignIn" element={<SignIn />} />
          {/* <Route path="/homecliente" element={<HomeEcommerce />} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
