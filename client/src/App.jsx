import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import SideBarDashBoard from "./Components/SideBarDashBoard/SideBarDashBoard";
import NavBarDashBoard from "./Components/NavBarDashBoard/NavBarDashBoard";
import DashBoardUser from "./pages/DashBoardUser/DashBoardUser";
import DashBoardEdit from "./pages/DashBoardEdit/DashBoardEdit";
import DashBoardProducts from "./pages/DashBoardProducts/DashBoardProducts";
import DashBoardShipping from "./pages/DashBoardShipping/DashBoardShipping";
import DashBoardSettings from "./pages/DashBoardSettings/DashBoardSettings";
import SearchBar from './SearchBar'
  
function App() {
  const clientAdmin = true;
  const [searches, setSearches] = useState([])

  function handleSearch(searchTerm) {
    const result = data.filter(p => p.Produtcs.productName.includes(searchTerm))
    setSearches(result)
 }

  return (
    <>
    <BrowserRouter>
      {location.pathname.includes("/dashboard") && clientAdmin ? (
        <div className="d-flex vh-100 vw-100 ">
          <SideBarDashBoard />
          <div className="d-flex flex-column">
            <NavBarDashBoard />
            <Routes>
              <Route path="/dashBoard/home" element={<DashBoard />} />
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
          
          <Route path="/" element={<DashBoard />} />   {/* LadingPage */}
        </Routes>
      )}
    </BrowserRouter>
          <SearchBar onSearch={handleSearch}/>
      <ul>
        {searches.map(p => (
          <li key={p.id}>{p.productName}</li>
        ))}
      </ul>
</>  
);
}

export default App;
