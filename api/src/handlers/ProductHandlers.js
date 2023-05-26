// import controllers
const {
  getAllProducts,
  getProductName,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
 
} = require("../controllers/ProductsControllers");

const getProductsHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const { clientAdminId } = req.params;
    let result;
    if (name) {
      result = await getProductName(name, clientAdminId);
    } else {
      result = await getAllProducts(clientAdminId);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductsHandlerById = async (req, res) => {
  try {
    const { productId } = req.params;
    let result;
    if (productId) {
      result = await getProductById(productId);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const {
      productName,
      description,
      categories,
      stocks,
      imageUrl,
      price,
      rating,
    } = req.body;
    const { clientAdminId } = req.params;
    const newProduct = await createNewProduct(
      productName,
      description,
      categories,
      stocks,
      imageUrl,
      price,
      rating,
      clientAdminId
    );
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProductHandler = async (req, res) => {
  try {
    const { productId } = req.params;
    const {
      productName,
      description,
      categoriesIds,
      stocks,
      imageUrl,
      price,
      rating,
    } = req.body;
    const updatedProduct = await updateProduct(
      productId,
      productName,
      description,
      categoriesIds,
      stocks,
      imageUrl,
      price,
      rating
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletedProductHandler = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await deleteProduct(productId);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
  getProductsHandler,
  postProductHandler,
  updateProductHandler,
  deletedProductHandler,
  getProductsHandlerById,
  
};
