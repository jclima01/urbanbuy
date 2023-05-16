// import controllers

const { getAllProducts } = require("../controllers/ProductsControllers");


const getProductsHandler = async (req, res) => {
    try {
      const products = await getAllProducts()
      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postProductHandler = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getProductsHandler,
    postProductHandler
  };
  