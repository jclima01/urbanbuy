import { CiSearch } from "react-icons/ci"

const DashBoardNavUsers = () => {
 
    const contentOrderSearchAndFilters={
        with:"95%",
        height:"100px",
        backgroundColor:"gray",
        borderRadius:"15px 15px 0px 0px",
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        alignContent: "center",
        justifyContent:"space-evenly",
        alignItems: "center"
    }
    const ordenamiento={
        backgroundColor:"#EFE7E7",
        width:"150px",
        borderRadius:"10px",
        padding:"15px",
        border:"none",
        textAlign:"center",
        color:"rgb(118, 118, 118)"
    }
    const filters={
        backgroundColor:"rgb(255, 127, 42)",
        width:"150px",
        borderRadius:"10px",
        padding:"15px",
        border:"none",
        color:"white",
        textAlign:"center"
    }
    const inputSearchUser={
        display:"flex",
        backgroundColor:"#EFE7E7",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        padding: "7px",
        width: "800px"
    }
    {/* 
                    pestañas all users - user detail
                    ------------------------------
                    componente ordenamiento
                    --------------------------
                    componente search users
                    ----------------------------
                    componente paginado
                    ----------------------
                    componente filters
                    */ }
    return (
        <>
                 
                  <div style={contentOrderSearchAndFilters}>
                        <div className="contentOrdenamiento">
                        <select style={ordenamiento}>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                        </div>
                        <div className="contentSearchUsers">
                                <div className=" input-container-navbar" style={inputSearchUser}>
                                    <input
                                        type="text"
                                        placeholder="Search Users..."
                                        className="inputsearch-navbar"
                                    />
                                    <hr />
                                    <CiSearch size={25} cursor={"pointer"} />
                                </div>
                        </div>
                        <div className="filters">
                            <select style={filters}>
                                <option value="Filters">Filters</option>
                            </select>
                        </div>
                  </div>
        </>
    )
  }
  
  export default  DashBoardNavUsers