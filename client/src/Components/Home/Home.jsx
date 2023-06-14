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
import { useDispatch, useSelector } from "react-redux";
import { loginClientAdmin, registerClientAdmin } from "../../redux/actions";

function Home(props) {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
 
  useEffect(() => {
    if (isAuthenticated && user)
      dispatch(
        registerClientAdmin(user.given_name, user.email, import.meta.env.VITE_AUTH0_PWD)
      )
      .then(dispatch(loginClientAdmin(user.email, import.meta.env.VITE_AUTH0_PWD)))
      .then(clientAdmin && navigate("/dashboard"))
      
  }, [isAuthenticated, dispatch, clientAdmin,navigate, user]);
  
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
