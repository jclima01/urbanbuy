import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import HomeEcommerce from "./Components/EcommerceCliente/HomeEcommerce";


function App() {
  const clientAdmin = true;
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

      { clientAdmin ? (

    <BrowserRouter>
      {location.pathname.includes("/dashboard") && clientAdmin ? (

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
          
          <Route path="/" element={<Home/>} />   {/* LadingPage */}
          <Route path="/login" element={<FormLogin />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/homecliente" element={<HomeEcommerce/>} />
        </Routes>
      )}

    </BrowserRouter>
          <SearchBar onSearch={handleSearch}/>
      <ul>
        {searches.length > 0 ? searches.map(p => (
          <li key={p.id}>{p.productName}</li>
        )) :
            Products.map(p => (
              <li key={p.id}>{p.productName}</li>
            ))
        }
      </ul>
</>  
);
}


export default App;
