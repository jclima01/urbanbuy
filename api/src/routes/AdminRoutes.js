const { Router } = require ('express');
const adminRouter = Router();
const {
    getAdminHandlers,
    postAdminHandler,
  } = require("../handlers/AdminHandlers.js");
  

//GET

adminRouter.get('/', getAdminHandlers)


//POST

adminRouter.post('/', postAdminHandler)

//PUT   

// adminRouter.put('/',)


//DELETE

// adminRouter.delete('/delete/:id', )

module.exports = adminRouter;