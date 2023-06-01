import { useDispatch } from "react-redux";
import { deleteCategory, editCategory } from "../../redux/actions";
import { BiEditAlt, BiCheck } from "react-icons/bi";
import { useState, useEffect } from "react";

const DashBoardSetCategory = ({ item, settest, cateriatest }) => {
  const dispatch = useDispatch();
  const [isActiveEdit, setIsActiveEdit] = useState(false);


  const [data, setData] = useState({
    categoryName: item.categoryName,
  });

  const handleChange = (e) => {
    e.preventDefault();
    settest(e.target.value );

    if (data.categoryName) {
      dispatch(editCategory(item._id, cateriatest));
    } else return;
  };


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
        <input
          type="text"
          name="categoryName"
          onChange={handleChange}
        />
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
        {isActiveEdit ? <BiCheck /> : <BiEditAlt />}
      </button>
    </span>
  );
};

export default DashBoardSetCategory;
