const { Router } = require("express");
const productRouter = Router();
const {
  getProductsHandler,
  getProductsHandlerById,
  postProductHandler,
  updateProductHandler,
  deletedProductHandler,
 
} = require("../handlers/ProductHandlers");

//GET

productRouter.get("/:clientAdminId", getProductsHandler);

productRouter.get("/product/:productId", getProductsHandlerById);

//POST

productRouter.post("/:clientAdminId", postProductHandler);


//PUT

productRouter.put("/:productId", updateProductHandler);

//DELETE

productRouter.delete("/delete/:productId", deletedProductHandler);

module.exports = productRouter;

