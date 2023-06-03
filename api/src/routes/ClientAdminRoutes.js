const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler ,
  domainHandler,
  getClientAdminByDomainHandler
  } = require("../handlers/ClientAdminHandlers.js");
  



clientAdminRouter.get('/:domain', getClientAdminByDomainHandler)
clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)
clientAdminRouter.put('/domain/:clientAdminId', domainHandler)

//PUT   

clientAdminRouter.put('/:clientId', updateClientHandler)


//DELETE

clientAdminRouter.delete('/delete/:clientId', deleteClientHandler )

module.exports = clientAdminRouter;