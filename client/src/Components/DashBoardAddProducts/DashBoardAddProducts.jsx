import { useState } from "react";
import UploadWidget from "../UploadWidget/UploadWidget";
import Form from "react-bootstrap/Form";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct } from "../../redux/actions";

const DashBoardAddProducts = ({ setIsActive, clientAdminId }) => {
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.categories);

  const [dataProducts, setdataProducts] = useState({
    productName: "",
    description: "",
    categories: [],
    stocks: 0,
    imageUrl: "",
    price: 0,
    rating: 0,
  });

  console.log(dataProducts);
  const {
    productName,
    description,
    categories,
    stocks,
    imageUrl,
    price,
    rating,
  } = dataProducts;

  const handleInputs = (e) => {
    e.preventDefault();
    setdataProducts({
      ...dataProducts,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postNewProduct(
        productName,
        description,
        categories,
        stocks,
        imageUrl,
        price,
        rating,
        clientAdminId
      )
    ).finally(() => {
      setIsActive(900);
    });

    setdataProducts({
      productName: "",
      description: "",
      categories: [],
      stocks: 0,
      imageUrl: "",
      price: 0,
      rating: 0,
    });
  };

  return (
    <div
      style={{
        width: "70%",
        height: "96%",
        padding: 15,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
      }}
    >
      <div
        onClick={() => setIsActive(900)}
        style={{
          position: "absolute",
          left: "-90px",
          bottom: "50%",
        }}
      >
        <MdOutlineKeyboardDoubleArrowRight size={30} cursor={"pointer"} />
      </div>
      <label>Image Product</label>
      <UploadWidget
        dataProducts={dataProducts}
        setdataProducts={setdataProducts}
      />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            placeholder="Ej. Screen 24hz"
            value={productName}
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={description}
            onChange={handleInputs}
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Categories</Form.Label>
          <Form.Select
            onChange={(e) => {
              e.preventDefault();


              if (dataProducts.categories.includes(e.target.value) ){
                setdataProducts({
                  ...dataProducts,
                  categories: [...categories],
                });
              } else {
                setdataProducts({
                  ...dataProducts,
                  categories: [...categories, e.target.value],
                });
              }
            }}
          >
            <option > Seleccionar</option>
            {categorie?.map((category) => (
              <>
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              </>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Stocks</Form.Label>
          <Form.Control
            type="number"
            name="stocks"
            value={stocks}
            onChange={handleInputs}
            placeholder="Ej. 12"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={price}
            onChange={handleInputs}
            placeholder="Ej. 300"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ratings</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            value={rating}
            onChange={handleInputs}
            placeholder="Ej. 4.5"
          />
        </Form.Group>

        <button
          style={{
            border: "none",
            width: 200,
            backgroundColor: "#ff7f2a",
            padding: 10,
            borderRadius: 8,
            color: "white",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </Form>
    </div>
  );
};

export default DashBoardAddProducts;
