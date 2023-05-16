const { Router } = require ('express');
const usersRouter = Router();
const {
    getUsersHandlers,
    postUsersHandler,
  } = require("../handlers/UsersHandlers.js");
  

//GET

usersRouter.get('/', getUsersHandlers)

//POST

usersRouter.post('/', postUsersHandler)

//PUT

// usersRouter.put('/')


//DELETE

// usersRouter.delete('/')


module.exports = usersRouter;