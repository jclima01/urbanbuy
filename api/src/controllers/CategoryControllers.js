const Category = require("../models/Category");
const ClientAdmin = require("../models/Users/ClientAdmin");

//GET funcionando correctamente
const getAllCategory = async (clientAdminId) => {

    try {
      // const clientAdmin = await ClientAdmin.findById(clientAdminId)
      const categories = await Category.find({clientAdmin: clientAdminId})
      // .populate("categories") // Popula las categorías
      // .exec();
  
      // return clientAdmin.categories;
      return categories;
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
        throw error;
      }
    };




const createNewCategory = async (clientAdminId, categoryName) => {
  const newCategory = new Category({
    categoryName,
    clientAdmin: clientAdminId,
  });

  const savedCategory = await newCategory.save();

  const clientAdmin = await ClientAdmin.findById(clientAdminId);
  clientAdmin.categories.push(savedCategory._id);
  await clientAdmin.save();
  return savedCategory;
};

//PUT

const setCategory = async (categoryName, categoryId) => {
  const category = await Category.findByIdAndUpdate(
    categoryId,
    { categoryName },
    { new: true }
  );

  if (!category) {
    throw new Error("Categoría no encontrada");
  }

  return category;
};

//DELETE funcionando

const deleteCategory = async (categoryId) => {
  const categoryDelete = await Category.findOneAndDelete({ _id: categoryId });
  return "category deleted";
};

module.exports = {
  getAllCategory,
  createNewCategory,
  deleteCategory,
  setCategory,
};
