const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler ,
  domainHandler,
  getClientAdminByDomainHandler,
  putBannerTextHandler,
  getAllOrdersClient,
  putThemeHandler,
} = require("../handlers/ClientAdminHandlers.js");




clientAdminRouter.get('/:domain', getClientAdminByDomainHandler)
clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)
clientAdminRouter.put('/domain/:clientAdminId', domainHandler)
clientAdminRouter.put('/banner/:clientAdminId', putBannerTextHandler)
clientAdminRouter.put('/theme/:clientAdminId', putThemeHandler)
//PUT   

clientAdminRouter.put('/:clientId', updateClientHandler)

//traerOrdenes
clientAdminRouter.get('/orders/:clientId',getAllOrdersClient)

//DELETE

clientAdminRouter.delete('/delete/:clientId', deleteClientHandler )

module.exports = clientAdminRouter;