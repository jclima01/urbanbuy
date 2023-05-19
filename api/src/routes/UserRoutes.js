const { Router } = require("express");
const usersRouter = Router();
const {
  loginUserHandler,
  registerUserHandler,
  UpdateUserHandler,
  DeleteUserHandler
} = require("../handlers/UserHandlers.js");

usersRouter.post("/login", loginUserHandler);
usersRouter.post("/register", registerUserHandler);

//PUT

usersRouter.put('/:userId', UpdateUserHandler)

//DELETE

usersRouter.delete('/:userId', DeleteUserHandler)

module.exports = usersRouter;
