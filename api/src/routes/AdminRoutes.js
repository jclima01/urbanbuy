const { Router } = require("express");
const adminRouter = Router();
const {
  loginHandler,
  registerHandler,
} = require("../handlers/AdminHandlers.js");

//GET

//POST

adminRouter.post("/register" , registerHandler);
adminRouter.post("/login", loginHandler);

//PUT

// adminRouter.put('/',)

//DELETE

// adminRouter.delete('/delete/:id', )

module.exports = adminRouter;
