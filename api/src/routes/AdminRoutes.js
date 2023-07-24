const { Router } = require("express");
const adminRouter = Router();
const {
  loginHandler,
  registerHandler,
  updateAdminHandler,
  deleteAdminHandler,
} = require("../handlers/AdminHandlers.js");

//GET

//POST

adminRouter.post("/register", registerHandler);
adminRouter.post("/login", loginHandler);

//PUT

adminRouter.put("/:adminId", updateAdminHandler);

//DELETE

adminRouter.delete("/delete/:adminId", deleteAdminHandler);

module.exports = adminRouter;
