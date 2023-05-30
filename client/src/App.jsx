import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import HomeEcommerce from "./Components/EcommerceCliente/HomeEcommerce";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ShoppingCartContainer from "./Components/EcommerceCliente/ShoppingCart/ShoppingCartContainer";
import Test from "./Components/Test/Test";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="d-flex w-100">
        {location.pathname !== "/" &&
        location.pathname !== "/test" &&
        location.pathname !== "/login" &&
        location.pathname !== "/singin" ? (
          <SideBarDashBoard />
        ) : null}
        <div className="d-flex flex-column">
          {location.pathname !== "/" &&
          location.pathname !== "/test" &&
          location.pathname !== "/login" &&
          location.pathname !== "/singin" ? (
            <NavBarDashBoard />
          ) : null}
          <Routes>
            <Route path="/test" element={<Test />} /> {/* LadingPage */}
            <Route path="/" element={<Home />} /> {/* LadingPage */}
            <Route path="/login" element={<FormLogin />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/dashBoard" element={<DashBoard />} />
            <Route path="/dashBoard/User" element={<DashBoardUser />} />
            <Route path="/dashBoard/Edit" element={<DashBoardEdit />} />
            <Route path="/dashBoard/Products" element={<DashBoardProducts />} />
            <Route path="/dashBoard/Shipping" element={<DashBoardShipping />} />
            <Route path="/dashBoard/Settings" element={<DashBoardSettings />} />
            <Route path="/homecliente" element={<HomeEcommerce />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
