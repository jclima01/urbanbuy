const Category = require('../models/Cagetory');
require("dotenv").config();



//GET funcionando correctamente
const getAllCategory = async (clientAdmin) => {
    try {
        const categorias = await Category.find({clientAdmin: clientAdmin});
        return categorias;
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
        throw error;
      }
    };


//POST terminado 

const createNewCategory =  async (clientAdmin, categoryName) => {

  const category = await Category.findOne({categoryName})
  if(category) throw new Error('category already exists');
  
  const newCategory = new Category({categoryName, clientAdmin});
  const savedCategory = await newCategory.save();
  return savedCategory;

};


//PUT

const setCategory = async (newCategoryName, id) => {

  const category = await Category.findOneAndUpdate( 
    { _id: id },
    { categoryName: newCategoryName },
    )
    return category;
};


//DELETE funcionando

const deleteCategory = async (id) => {

  const categoryDelete = await Category.findOneAndDelete({_id: id})
  return categoryDelete;
};


module.exports = {
    getAllCategory,
    createNewCategory,
    deleteCategory,
    setCategory
}