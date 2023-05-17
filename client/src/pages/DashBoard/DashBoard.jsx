import logo from "../../assets/Logo.jpeg";
const DashBoard = () => {
  return (
    <div className="vh-100  d-flex justify-content-center">
      <div className="contianer-home">
        <div className="d-flex   h-50 w-100">
          <div className="freaturedSettion">
            <h1>Hello Henry Carrilo,</h1>
            <p>Improve your products in our section.</p>
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
        <div className="d-flex m-4  h-75 w-100">
          <div className="freaturedSettion3">
            <h1>hola</h1>
          </div>
          <div className="freaturedSettion4">
            <h1>hola</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
