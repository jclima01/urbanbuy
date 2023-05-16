const { Router } = require ('express');
const productRouter = Router();
const {
    getProductsHandler,
    postProductHandler,
  } = require("../handlers/ProductHandlers");
  

//GET

productRouter.get('/', getProductsHandler)


//POST

productRouter.post('/', postProductHandler)

//PUT   

// productRouter.put('/',)


//DELETE

// productRouter.delete('/delete/:id', )

module.exports = productRouter;