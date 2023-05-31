import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./DashBoardTableCardProducts.module.css";
import Swal from "sweetalert2";
import DashBoardModalEditProduct from "../../DashBoardEditProduct/DashBoardEditProduct";
const DashBoardTableCardProducts = ({
  productName,
  description,
  categories,
  imageUrl,
  stocks,
  price,
  rating,
  id,
  setIsActive,
  
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [idReference, setIdReference] = useState("");
  const dispatch = useDispatch();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIdReference(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };


  useEffect(() => {
    dispatch(deleteProduct(idReference));
    dispatch(getAllProducts());
  }, [dispatch, idReference]);
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
        <td className={styles.flexwrap}>
          {categories.map((element) => element.categoryName).join("-")}
        </td>
        <td>{stocks}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td className={styles.container_button}>
          <button className={styles.button} onClick={handleDelete}>
            delete
          </button>
          {/* <button className={styles.button} onClick={handleShow}>
            Edit
          </button> */}
        </td>
      </tr>

      <DashBoardModalEditProduct 
      show={show} 
      handleClose={handleClose} 
      productName={productName}
      description={description}
      categories={categories}
      imageUrl={imageUrl}
      stocks={stocks}
      price={price}
      rating={rating}
      id={id}
      />
    </tbody>
  );
};

export default DashBoardTableCardProducts;
