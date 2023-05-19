import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import DashBoard from "./pages/DashBoard/DashBoard";
import SideBarDashBoard from "./Components/SideBarDashBoard/SideBarDashBoard";
import NavBarDashBoard from "./Components/NavBarDashBoard/NavBarDashBoard";
import DashBoardUser from "./pages/DashBoardUser/DashBoardUser";
import DashBoardEdit from "./pages/DashBoardEdit/DashBoardEdit";
import DashBoardProducts from "./pages/DashBoardProducts/DashBoardProducts";
import DashBoardShipping from "./pages/DashBoardShipping/DashBoardShipping";
import DashBoardSettings from "./pages/DashBoardSettings/DashBoardSettings";
import Home from ".././src/Components/Home/Home";
import FormLogin from ".././src/Components/FormLogin/FormLogin";
import SignIn from ".././src/Components/SignIn/SignIn";
import HomeEcommerce from "./Components/EcommerceCliente/HomeEcommerce";

function App() {
  
  const clientAdmin = useSelector((state) => state.UserSession);

  
  return (
    <>
      {clientAdmin ? (
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
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} /> {/* LadingPage */}
          <Route path="/login" element={<FormLogin />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/homecliente" element={<HomeEcommerce />} />
        </Routes>
      )}
    </>
  );
}

export default App;
