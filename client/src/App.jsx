import "./App.css";
import {  Routes, Route } from "react-router-dom";
import {  useSelector } from 'react-redux';
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
import SignIn from "./Components/SignIn/SignIn"

import SearchBar from './SearchBar/SearchBar.jsx'
import { useState } from "react";
import { Products } from "./data"  


function App() {


  const clientAdmin = useSelector(state => state.UserSession)
  console.log('clientAdmin', clientAdmin)
  const [searches, setSearches] = useState([])

  function handleSearch(searchTerm) {
    const result = Products.some(p => p.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      if (result){
        const result = Products.filter(p => p.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearches(result)
        console.log('result: ', result)
        console.log('searchTerm: ', searchTerm)
      } else {
        setSearches([])
      }
  }
  return (
    <>

      { clientAdmin  ? (
        <div className="d-flex vh-100 vw-100 ">
          <SideBarDashBoard />
          <div className="d-flex flex-column">
            <NavBarDashBoard />
            <Routes>
              <Route  index path="/dashBoard/home" element={<DashBoard />} />
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
          
          <Route path="/" element={<Home/>} />   {/* LadingPage */}
          <Route path="/login" element={<FormLogin />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      )}

</>  
);
}


export default App;
