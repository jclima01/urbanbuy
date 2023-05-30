import DashBoardNavUsers from "./NavUsers";
import DashBoardListUsers from "./ListUsers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientAdminUsers } from '../../redux/actions';
const DashBoardUsersConteiner = ({setActiveTab,activeTab,users,setActualPage}) => {      
      


    const dispatch = useDispatch()
    const clientAdmin = useSelector(state => state.clientAdmin)
    // const users = useSelector(state => state.clientAdminUsers)
  
    useEffect(() => {
        dispatch(getClientAdminUsers(clientAdmin._id))
       },[]);
     
return(
        <>
         <DashBoardNavUsers  />
         <DashBoardListUsers setActiveTab={setActiveTab} activeTab={activeTab} users={users} setActualPage={setActualPage}/>
        </>
      
      ) 

}

export default DashBoardUsersConteiner