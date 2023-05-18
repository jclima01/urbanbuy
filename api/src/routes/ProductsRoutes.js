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

productRouter.get('/', getProductsHandler)

productRouter.get('/:id', getProductsHandlerById)


//POST

productRouter.post('/', postProductHandler)

//PUT   

productRouter.put('/:id', updateProductHandler)


//DELETE

productRouter.delete('/delete/:id', deletedProductHandler)

module.exports = productRouter;