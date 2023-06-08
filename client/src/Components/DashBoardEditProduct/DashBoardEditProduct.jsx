import { useEffect, useState } from "react";
import s from "./DashBoardEditProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editProduct } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";

const DashBoardModalEditProduct = ({
  show,
  handleClose,
  productName,
  description,
  categories,
  imageUrl,
  stocks,
  price,
  rating,
  id,
}) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);
  let [dataEditProducts, setDataEditProducts] = useState({
    productName,
    description,
    categories,
    imageUrl,
    stocks,
    price,
    rating,
  });

  const handleInputChange = (e) => {
    setDataEditProducts({
      ...dataEditProducts,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(
      editProduct(
        id,
        dataEditProducts.productName,
        dataEditProducts.description,
        dataEditProducts.categories.map(item => item._id),
        dataEditProducts.imageUrl,
        dataEditProducts.stocks,
        dataEditProducts.price,
        dataEditProducts.rating
      )
    ).finally(() => {
      handleClose();
      toast.success("Product Updated Successfully");
    });
  };

  const handleClickCtegoryEdit = (e) => {
    e.preventDefault();

    const _id = e.target.value;


    if (_id.trim() !== "") {
      if (dataEditProducts.categories.some((category) => category._id === _id)) {
        // Si la categoría ya está seleccionada, la eliminamos del arreglo
        setDataEditProducts((prevState) => ({
          ...prevState,
          categories: prevState.categories.filter((category) => category._id !== _id),
        }));
      } else {
        // Si la categoría no está seleccionada, la agregamos al arreglo
        const selectedCategory = category.find((category) => category._id === _id);
        if (selectedCategory) {
          setDataEditProducts((prevState) => ({
            ...prevState,
            categories: [...prevState.categories, selectedCategory],
          }));
        }
      }
    }
  };


   



  return (
    <Modal show={show} onHide={handleClose}>
      <Toaster
        toastOptions={{
          style: {
            padding: "36px",
            color: "#2f2b29",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={dataEditProducts.imageUrl}
            autoFocus
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={dataEditProducts.productName}
              name="productName"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={dataEditProducts.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categrories</Form.Label>
            <Form.Select onChange={handleClickCtegoryEdit}>
              <option key=" ">Seleccionar</option>
              {category?.map((category) => (
                <option key={category._id} id={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className={s.containercategorias}>
            {dataEditProducts.categories?.map((item) => (
              <div key={item._id} className={s.containercate}>
                <label>{item.categoryName}</label>
              </div>
            ))}
          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stocks</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.stocks}
              name="stocks"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.price}
              name="price"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={dataEditProducts.rating}
              name="rating"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitEdit}>
          Edit Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DashBoardModalEditProduct;
