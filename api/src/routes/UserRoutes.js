const { Router } = require("express");
const usersRouter = Router();
const {
  loginUserHandler,
  registerUserHandler,
  updateUserHandler,
  deleteUserHandler
} = require("../handlers/UserHandlers.js");

usersRouter.post("/login", loginUserHandler);
usersRouter.post("/register", registerUserHandler);

//PUT

usersRouter.put('/:userId', updateUserHandler)

//DELETE

usersRouter.delete('/:userId', deleteUserHandler)

module.exports = usersRouter;
