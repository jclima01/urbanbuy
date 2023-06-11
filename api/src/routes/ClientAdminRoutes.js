const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler,
  getAllOrdersClient,
  domainHandler,
  getClientAdminByDomainHandler
  } = require("../handlers/ClientAdminHandlers.js");
  
  
//traerOrdenes
clientAdminRouter.get('/orders/:clientId',getAllOrdersClient)

  



clientAdminRouter.get('/:domain', getClientAdminByDomainHandler)
clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)
clientAdminRouter.put('/domain/:clientAdminId', domainHandler)

//PUT   

clientAdminRouter.put('/:clientId', updateClientHandler)


//DELETE

clientAdminRouter.delete('/delete/:clientId', deleteClientHandler )

module.exports = clientAdminRouter;