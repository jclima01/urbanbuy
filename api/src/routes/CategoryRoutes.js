const { Router } = require("express");
const categoryRoutes = Router();

const {
    getCategoryHandler,
    postCategoryHandler,
    putCategoryHandler,
    deleteCategoryHandler
} = require('../handlers/CategoryHandlers.js');

categoryRoutes.get('/', getCategoryHandler)
categoryRoutes.post('/', postCategoryHandler)
categoryRoutes.put('/', putCategoryHandler)
categoryRoutes.delete('/', deleteCategoryHandler)


