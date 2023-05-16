const { Router } = require ('express');
const clientAdminRouter = Router();
const {
    getClientAdminHandlers,
    postClientAdminHandler,
  } = require("../handlers/ClientAdminHandlers.js");
  

//GET

clientAdminRouter.get('/', getClientAdminHandlers)


//POST

clientAdminRouter.post('/', postClientAdminHandler)

//PUT   

// clientAdminRouter.put('/',)


//DELETE

// clientAdminRouter.delete('/delete/:id', )

module.exports = clientAdminRouter;