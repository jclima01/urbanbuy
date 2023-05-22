
import "../DashBoardUser/DashBoardUser.css";
import DashBoardListUsers from "../DashBoardUser/ListUsers";
import DashBoardNavUsers from "./NavUsers";
import PaginadoUser from "./PaginadoUser";

const DashBoardUser = () => {
  const navTab={
    width:"100%",
    display:"flex",
    flexDirection:"row",
    flexWrap: "nowrap",
    justifyContent:"flex-start",
    alignItems:"center",
    alignContent: "center",
    overflow:"hidden",
    paddingTop:"7px",
    height:"50px"

};

 const tab={    
    backgroundColor: "#ff7f2a",
    width:"max-content",
    padding: "11px 20px 11px 20px",
    borderRadius:"10px",
    color:"white",
    marginRight:"8px",
    cursor:"pointer",

    
}
const tabActive={
    backgroundColor: "white",
    width:"max-content",
    padding: "11px 20px 11px 20px",
    borderRadius:"10px",
    color:"black",
    border:"2px solid #ff7f2a",
    marginRight:"8px",
    
}

const ocultarDetalles=()=> {
 /* document.getElementById('overlay').style.display = 'none';
  document.getElementById('detalles').style.display = 'none';*/
}

  return (
    <>
    <div className="contieneTodoDashboardUsers">
    <div className="navegateUser">
        <div style={navTab}>
                        <div style={tabActive}>All Users</div>
                        <div style={tab}>User Detail</div>
        </div>
        <div className="paginationUsers">
          <PaginadoUser/>
        </div>
    </div>
    <div className="contentDashboardUsers">
                  <DashBoardNavUsers/> {/* Eze */}
                  
                   <DashBoardListUsers/>{/* Ema */}
                

    </div>
    </div>
    <div id="overlay" style={{display:"none"}}></div>
    <div id="detalles" style={{display:"none"}}>
        {/* <!-- Contenido de los detalles del cliente --> */}
        <button onClick={ocultarDetalles()}></button>
    </div>
    </>
  )
}

export default DashBoardUser;
