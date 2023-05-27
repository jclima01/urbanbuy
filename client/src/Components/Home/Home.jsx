import React, { useEffect } from "react";
import AppNavbar from "../Nav/AppNavBar";
import Introduction from "../Introduction/Introduction";
import Slider from "../Slider/Slider";
import Faq from "../Faq/Faq";
import CompraSegura from "../CompraSegura/CompraSegura";
import Footer from "../Footer/Footer";
import Team from "../Team/Team";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const { isAuthenticated } = useAuth0();
  console.log("usuario authenticated", isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    if (!!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  
  return (
    <div className="home-landing">
      <AppNavbar />

      <Introduction />
      <Slider />
      <CompraSegura />
      <Faq />
      <Team />
      {/* <ProductDetail productId={productId}/> */}

      <Footer />
    </div>
  );
}

export default Home;
