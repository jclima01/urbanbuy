const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler, 
} = require("../handlers/ClientAdminHandlers.js");



clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)

//PUT   

clientAdminRouter.put('/:clientId', updateClientHandler)


//DELETE

clientAdminRouter.delete('/delete/:clientId', deleteClientHandler )

module.exports = clientAdminRouter;