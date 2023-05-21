
import "../DashBoardUser/DashBoardUser.css";
import DashBoardListUsers from "../DashBoardUser/ListUsers";
import DashBoardNavUsers from "./NavUsers";

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
    backgroundColor: "rgb(255, 127, 42)",
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
    border:"2px solid rgb(255, 127, 42)",
    marginRight:"8px",
    
}
  return (
    <div className="contieneTodoDashboardUsers">
    <div style={navTab}>
                    <div style={tabActive}>All Users</div>
                    <div style={tab}>User Detail</div>
    </div>
    <div className="contentDashboardUsers">
                  <DashBoardNavUsers/> {/* Eze */}
                  
                   <DashBoardListUsers/>{/* Ema */}
                

    </div>
    </div>
  )
}

export default DashBoardUser;
