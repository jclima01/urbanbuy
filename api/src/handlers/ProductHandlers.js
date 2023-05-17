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
  const { productName, description, categories, stocks, imageUrl, price, rating, clientAdmin } = req.body;
  try {
    const newProduct = await createNewProduct(productName, description, categories, stocks, imageUrl, price, rating, clientAdmin);
    res.status(200).json({ message: "producto creado", newProduct });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateProductHandler = async (req, res) => {
  const { productId } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await updateProduct(productId, updatedData);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el producto" })
  }
}

const deletedProductHandler = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await deleteProduct(productId);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ error: "Error al borrar el producto" })
  }

}



module.exports = {
  getProductsHandler,
  postProductHandler,
  updateProductHandler,
  deletedProductHandler

};