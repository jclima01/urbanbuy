
import "../DashBoardUser/DashBoardUser.css";
import DashBoardListUsers from "../DashBoardUser/ListUsers";
import DashBoardNavUsers from "./NavUsers";

const DashBoardUser = () => {
  return (
    <div className="contentDashboardUsers">
                  <DashBoardNavUsers/> {/* Eze */}
                   <DashBoardListUsers/>{/* Ema */}
                

    </div>
  )
}

export default DashBoardUser;
