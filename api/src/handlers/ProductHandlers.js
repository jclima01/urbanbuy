// import controllers
const { getAllProducts, getProductName, getProductById, createNewProduct, updateProduct, deleteProduct } = require("../controllers/ProductsControllers")


const getProductsHandler = async (req, res) => {
  const { name } = req.query;
  const { id } = req.params;
  try {
    let result;
    if (id) {
      result = await getProductById(id);
    } else if (name) {
      result = await getProductName(name);
    } else {
      result = await getAllProducts();
    }
    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




const postProductHandler = async (req, res) => {
  const {productName, description, categories, stocks, imageUrl, price, rating, clientAdmin} = req.body;
  try {
    const newProduct = await createNewProduct(productName, description, categories, stocks, imageUrl, price, rating, clientAdmin);
    res.status(200).json({message: "producto creado", newProduct: newProduct});

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProductsHandler,
  postProductHandler
};
