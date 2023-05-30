import { useState } from "react";
import s from "./DashBoardEditProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editProduct, getAllProducts } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";

const DashBoardModalEditProduct = ({
  show,
  handleClose,
  productName,
  description,
  // categories,
  imageUrl,
  stocks,
  price,
  rating,
  _id,
}) => {
  const clientAdminId = useSelector(state => state.clientAdmin)

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  // const [isChecked, setIsChecked] = useState(false)
  const [dataEditProducts, setDataEditProducts] = useState({
    productName,
    description,
    categories: [],
    imageUrl,
    stocks,
    price,
    rating,
  });
  console.log(dataEditProducts);
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
        _id,
        dataEditProducts.productName,
        dataEditProducts.description,
        dataEditProducts.categories,
        dataEditProducts.imageUrl,
        dataEditProducts.stocks,
        dataEditProducts.price,
        dataEditProducts.rating,
      )
    ).finally(() => {
      dispatch(getAllProducts(clientAdminId))
      handleClose();
      toast.success("Product Updated Successfully");
    });
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
            <Form.Label>Categroies</Form.Label>
            <Form.Check>
              <div className={s.categoriescheked}>
                {categories?.map((category) => (
                  <div key={category._id}>
                    <Form.Check.Label>{category.categoryName}</Form.Check.Label>
                    <Form.Check.Input
                      type="checkbox"
                      checked={dataEditProducts.categories.some(
                        (c) => c._id === category._id
                      )}
                      name={category.categoryName}
                      id={category._id}
                      value={category.categoryName}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDataEditProducts((prevData) => ({
                            ...prevData,
                            categories: [...prevData.categories, category._id],
                          }));
                        } else {
                          setDataEditProducts((prevData) => ({
                            ...prevData,
                            categories: prevData.categories.filter(
                              (c) => c._id !== category._id
                            ),
                          }));
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </Form.Check>
          </Form.Group>

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
