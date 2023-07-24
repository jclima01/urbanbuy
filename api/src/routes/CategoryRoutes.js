const { Router } = require("express");
const categoryRoutes = Router();

const {
    getCategoryHandler,
    postCategoryHandler,
    putCategoryHandler,
    deleteCategoryHandler
} = require('../handlers/CategoryHandlers.js');

categoryRoutes.get('/:clientAdminId', getCategoryHandler)
categoryRoutes.post('/:clientAdminId', postCategoryHandler)
categoryRoutes.put('/:categoryId', putCategoryHandler)
categoryRoutes.delete('/:categoryId', deleteCategoryHandler)


module.exports = categoryRoutes;