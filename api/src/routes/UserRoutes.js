const { Router } = require("express");
const usersRouter = Router();
const {
  loginUserHandler,
  registerUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getClientAdminUsersHandler,
  getUserHandler
} = require("../handlers/UserHandlers.js");

usersRouter.post("/login", loginUserHandler);
usersRouter.post("/register/:clientAdminId", registerUserHandler);
usersRouter.get("/:clientAdminId", getClientAdminUsersHandler);
usersRouter.get("/user/:userId", getUserHandler);

//PUT

usersRouter.put("/:userId", updateUserHandler);

//DELETE

usersRouter.delete("/delete/:userId", deleteUserHandler);

module.exports = usersRouter;
