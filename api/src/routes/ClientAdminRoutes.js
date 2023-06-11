const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler,
  getAllOrdersClient 
  } = require("../handlers/ClientAdminHandlers.js");
  
//traerOrdenes
clientAdminRouter.get('/orders/:clientId',getAllOrdersClient)

clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)

//PUT   

clientAdminRouter.put('/:clientId', updateClientHandler)


//DELETE

clientAdminRouter.delete('/delete/:clientId', deleteClientHandler )

module.exports = clientAdminRouter;