import { useState } from "react";
import UploadWidget from "../UploadWidget/UploadWidget";
import Form from "react-bootstrap/Form";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import s from "./DashBoardAddProducts.module.css";

const DashBoardAddProducts = ({ setIsActive, clientAdminId }) => {
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.categories);
  const [Category, setsetCategory] = useState("");

  const [dataProducts, setdataProducts] = useState({
    productName: "",
    description: "",
    categories: [],
    stocks: 0,
    imageUrl: "",
    price: 0,
    rating: 0,
  });

  const {
    productName,
    description,
    categories,
    stocks,
    imageUrl,
    price,
    rating,
  } = dataProducts;

  const [errors, setErrors] = useState({
    productNameError: "",
    descriptionError: "",
    stocksError: "",
    priceError: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputs = (e) => {
    e.preventDefault();
    setdataProducts({
      ...dataProducts,
      [e.target.name]: e.target.value,
    });

    // Verificar si hay errores en el campo actual y habilitar el botón si no hay errores
    if (e.target.name === "productName" && errors.productNameError) {
      setErrors({
        ...errors,
        productNameError: "", // Borrar el mensaje de error
      });
      setIsButtonDisabled(false); // Habilitar el botón
    } else if (e.target.name === "description" && errors.descriptionError) {
      setErrors({
        ...errors,
        descriptionError: "", // Borrar el mensaje de error
      });
      setIsButtonDisabled(false); // Habilitar el botón
    } else if (e.target.name === "stocks" && errors.stocksError) {
      setErrors({
        ...errors,
        stocksError: "", // Borrar el mensaje de error
      });
      setIsButtonDisabled(false); // Habilitar el botón
    } else if (e.target.name === "price" && errors.priceError) {
      setErrors({
        ...errors,
        priceError: "", // Borrar el mensaje de error
      });
      setIsButtonDisabled(false); // Habilitar el botón
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productNameError =
      productName.trim() === "" ? "Requiero nombre del producto" : "";
    const descriptionError =
      description.trim().length <= 10
        ? "La descripcion debe ser mas larga (10 letras)"
        : "";
    const stocksError = stocks <= 0 ? "Stock debe ser mayor a cero" : "";
    const priceError = price <= 0 ? "Precio debe ser mayor a cero" : "";

    if (productNameError || descriptionError || stocksError || priceError) {
      setErrors({
        productNameError,
        descriptionError,
        stocksError,
        priceError,
      });
      setIsButtonDisabled(true);
    } else {
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
        toast.success("Successfully toasted!");
        setIsActive(1200);
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
      setErrors({
        productNameError: "",
        descriptionError: "",
        stocksError: "",
        priceError: "",
      });
      setIsButtonDisabled(false);
    }
  };

  //Agregue control de errores (Ale)

  // <Form.Control.Feedback> es un componente proporcionado por la biblioteca react-bootstrap que se utiliza para mostrar retroalimentación o mensajes de error asociados a un campo de formulario.

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
        onClick={() => {
          setdataProducts({
            productName: "",
            description: "",
            categories: [],
            stocks: 0,
            imageUrl: "",
            price: 0,
            rating: 0,
          });
          setIsActive(1200);
        }}
        style={{
          position: "absolute",
          left: "-90px",
          bottom: "50%",
        }}
      >
        <MdOutlineKeyboardDoubleArrowRight size={30} cursor={"pointer"} />
      </div>
      <div className={s.containerImageViewAddProduct}>
        <img className={s.imagenView  } src={dataProducts.imageUrl || "https://us.123rf.com/450wm/rastudio/rastudio1601/rastudio160103779/51365230-icono-de-l%C3%ADnea-de-la-c%C3%A1mara-para-web-m%C3%B3vil-e-infograf%C3%ADa-vector-icono-de-l%C3%ADnea-delgada-gris-en-el.jpg?ver=6"} alt="" />
      </div>
      <label>Image Product</label>
      <UploadWidget
        dataProducts={dataProducts}
        setdataProducts={setdataProducts}
      />
      <Form>
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            placeholder="Ej. Screen 24hz"
            value={productName}
            onChange={handleInputs}
            isInvalid={errors.productNameError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.productNameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={description}
            onChange={handleInputs}
            rows={3}
            isInvalid={errors.descriptionError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.descriptionError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Categories</Form.Label>
          <Form.Select
          key="1"
            onChange={(e) => {
              e.preventDefault();
              setsetCategory(e.target.value);

              if (dataProducts.categories.includes(e.target.value)) {
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
            <option value={Category}>Selecionar</option>
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
            isInvalid={errors.stocksError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.stocksError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={price}
            onChange={handleInputs}
            placeholder="Ej. 300"
            isInvalid={errors.priceError !== ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.priceError}
          </Form.Control.Feedback>
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
            backgroundColor: isButtonDisabled ? "grey" : "#ff7f2a",
            padding: 10,
            borderRadius: 8,
            color: "white",
          }}
          type="submit"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >
          Add Product
        </button>
      </Form>
    </div>
  );
};

export default DashBoardAddProducts;
