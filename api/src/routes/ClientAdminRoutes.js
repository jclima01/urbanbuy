const { Router } = require ('express');
const clientAdminRouter = Router();
const {
  loginClientAdminHandler,
  registerClientAdminHandler, 
  } = require("../handlers/ClientAdminHandlers.js");
  



clientAdminRouter.post('/login', loginClientAdminHandler)
clientAdminRouter.post('/register', registerClientAdminHandler)

//PUT   

// clientAdminRouter.put('/',)


//DELETE

// clientAdminRouter.delete('/delete/:id', )

module.exports = clientAdminRouter;