import { useEffect, useState } from "react";
import { deleteProduct } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DashBoardTableCardProducts.module.css"
import Swal from "sweetalert2";
const DashBoardTableCardProducts = ({
  productName,
  categories,
  imageUrl,
  stocks,
  price,
  rating,
  id,
}) => {
  const [idReference, setIdReference] = useState("");
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.categories);

  
  const categoriatest = categorie
  .filter(category => categories?.includes(category._id))
  .map(category => category.categoryName);
  
 

  
const handleDelete = () =>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      setIdReference(id)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
   
}
  

  useEffect(() => {
    dispatch(deleteProduct(idReference));
  }, [idReference]);
  return (
    <tbody>
      <tr>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              padding: 10,
              width: 30,
              height: 30,
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={imageUrl}
              alt=""
              style={{ width: 100, height: 100, objectFit: "contain" }}
            />
          </div>
        </td>
        <td>{productName}</td>
        <td>{categoriatest.map(p=> p).join('-')}</td>

        <td>{stocks}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>
          {/* <button>Edit </button> */}
          <button className={styles.button} onClick={handleDelete}>delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default DashBoardTableCardProducts;
