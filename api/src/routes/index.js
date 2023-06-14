const { Router } = require("express");

// Importar todos los routers;

  
const ProductRouter = require("./ProductsRoutes.js");
const UsersRouter = require("./UserRoutes.js");
const AdminRouter = require("./AdminRoutes.js");
const ClientAdminRouter = require("./ClientAdminRoutes.js");
const CategoryRoutes = require("./CategoryRoutes.js");
const ReviewRouter = require("./ReviewRoutes.js");
const OrderRouter = require("./OrderRoutes.js");
const WebhookRouter = require("./WebhookRoutes.js");


const mainRouter = Router();

// Configurar los routers

mainRouter.use("/products", ProductRouter);
mainRouter.use("/users", UsersRouter); // ver este Handler, se repite en la ruta /user  !!
mainRouter.use("/admin", AdminRouter);
mainRouter.use("/clientAdmin", ClientAdminRouter);
mainRouter.use("/category", CategoryRoutes);
mainRouter.use("/reviews", ReviewRouter);
mainRouter.use("/orders", OrderRouter);
mainRouter.use("/webhook", WebhookRouter);


module.exports = mainRouter;
