import { useDispatch } from "react-redux";
import { deleteCategory, editCategory } from "../../redux/actions";
import { BiEditAlt, BiCheck } from "react-icons/bi";
import { useState } from "react";

const DashBoardSetCategory = ({ item }) => {
  const dispatch = useDispatch();
  const [isActiveEdit, setIsActiveEdit] = useState(false);

   const [data, setData] = useState({
    categoryName: item.categoryName
   }); 

   const  handleChange = (e) => {
    setData({
        [e.target.name] : e.target.value
    })

    if(data.categoryName) {
        dispatch(editCategory(item._id, data.categoryName))
    }else return;

   }

  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        padding: 10,
        backgroundColor: "#fff",
        color: "black",
        margin: 5,
        borderRadius: 10,
      }}
      key={item._id}
    >
      {isActiveEdit ? (
        <input type="text" name="categoryName" value={data.categoryName}  onChange={handleChange}/>
      ) : (
        item.categoryName
      )}
      <button
        style={{
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eb6437",
          color: "white",
          border: "none",
          padding: 3,
          borderRadius: 5,
        }}
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteCategory(item._id));
        }}
      >
        x
      </button>

      <button
        style={{
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isActiveEdit ? "green" : "orange",
          color: "white",
          border: "none",
          padding: 3,
          borderRadius: 5,
        }}
        onClick={(e) => {
          e.preventDefault();
          setIsActiveEdit(!isActiveEdit);
        }}
      >
       { isActiveEdit ? <BiCheck /> : <BiEditAlt />}
      </button>
    </span>
  );
};

export default DashBoardSetCategory;
