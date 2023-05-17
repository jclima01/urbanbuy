const { Router } = require("express");
const usersRouter = Router();
const {
  loginUserHandler,
  registerUserHandler,
} = require("../handlers/UserHandlers.js");

usersRouter.post("/login", loginUserHandler);
usersRouter.post("/register", registerUserHandler);

//PUT

// usersRouter.put('/')

//DELETE

// usersRouter.delete('/')

module.exports = usersRouter;
