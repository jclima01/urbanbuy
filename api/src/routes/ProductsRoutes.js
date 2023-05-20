const { Router } = require ('express');
const productRouter = Router();
const {
    getProductsHandler,
    getProductsHandlerById,
    postProductHandler,
    updateProductHandler,
    deletedProductHandler,
  } = require("../handlers/ProductHandlers");
  

//GET

productRouter.get('/:clientAdminId', getProductsHandler)

productRouter.get('/:productId', getProductsHandlerById)


//POST

productRouter.post('/', postProductHandler)

//PUT   

productRouter.put('/:productId', updateProductHandler)


//DELETE

productRouter.delete('/delete/:productId', deletedProductHandler)

module.exports = productRouter;