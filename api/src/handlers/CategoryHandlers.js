const { 
  createNewCategory,
  getAllCategory,
  deleteCategory,
  setCategory
 } = require('../controllers/CategoryControllers');

const getCategoryHandler = async (req, res) => {
    try {
      const { clientAdmin } = req.body;
      if(clientAdmin) {
        const categories = await getAllCategory(clientAdmin)
        res.status(200).send(categories);
        
      }

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postCategoryHandler = async (req, res) => {
    try {
      const {clientAdmin, categoryName} = req.body;
      if(clientAdmin && categoryName){ //clientAdmin que exista en la tabla
        const newCategory = await createNewCategory(clientAdmin, categoryName);
        res.status(201).send('se creo la categoria exitosamente', newCategory);
      }
      
        } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const putCategoryHandler = async (req, res) => {
    try {
        const { idCategory, categoryName } = req.body;
        if(idCategory && categoryName){
          const editCategory = await setCategory(categoryName, idCategory)
          res.status(201).send('se actualizo la categoria')
        } 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




  const deleteCategoryHandler = async (req, res) => {
    try {
        const {idCategory} = req.body;
        if(idCategory === undefined) return null; 
        if(idCategory){
          const categoryDelete = await deleteCategory(idCategory)
          res.status(204).send(categoryDelete)
        }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  module.exports = {
    getCategoryHandler,
    postCategoryHandler,
    putCategoryHandler,
    deleteCategoryHandler
  };