const { Router } = require('espress');
const categoryRouter = Router()
const {
    getCategoryHandler,
    postCategoryHandler,
    putCategoryHandler,
    deleteCategoryHandler, 
} = require ("../handlers/CategoryHandlers.js");

//GET
categoryRouter.get('/', getCategoryHandler)

//POST
categoryRouter.post('/', postCategoryHandler)

//PUT

categoryRouter.put('/', putCategoryHandler)

//DELETE

categoryRouter.delete('/', deleteCategoryHandler)

module.exports = categoryRouter;