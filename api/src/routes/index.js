const { Router } = require('express');
// Importar todos los routers;
const ProductRouter = require('./ProductsRoutes.js');
const UsersRouter = require('./UsersRoutes.js');
const AdminRouter = require('./AdminRoutes.js');
const ClientAdminRouter = require('./ClientAdminRoutes.js');


const mainRouter = Router();

// Configurar los routers

mainRouter.use('/products', ProductRouter);
mainRouter.use('/users', UsersRouter);
mainRouter.use('/admin', AdminRouter);
mainRouter.use('/clientAdmin', ClientAdminRouter);
// mainRouter.use('/users', UsersRouter);
// mainRouter.use('/users', UsersRouter);



module.exports = mainRouter;
